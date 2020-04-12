
'use strict'

import { Card } from "./Card";
import { Player } from "./Player";
import { RuleBookAbstract } from "./rule_book/Rulebook"
const Constants = require('./shared/constants');

class Game {
    constructor() {
        this.sockets = {};
        this.players = {};
        this.loadedGames = {};
        Constants.GAMES_LOADED.forEach(gameName => {
            this.loadedGames[gameName] = new RuleBookAbstract(gameName)
        })
    }

    loadGames(socketWhoStarted, gameSelected) {
        if (!this.gameSelected && this.loadedGames[gameSelected].CanLoadGame(this)) {
            this.gameSelected = this.loadedGames[gameSelected];
            this.gameSelected.setFirstPlayer(socketWhoStarted.id);
            return true;
        }
        return false;
    }

    doAction(socket, action) {
        if (this.gameSelected) {
            this.gameSelected.handle(this, socket, action);
        } else {
            socket.emit(Constants.CLIENT_MSG.ERROR_GAME_NOT_LOADED);
        }
    }

    addPlayer(socket, playerName) {
        //prevent duplicate sockets and check if the game is already running
        if (this.gameSelected) {
            socket.emit(Constants.CLIENT_MSG.GAME_ALREADY_STARTED);
        }
        else if (!this.sockets[socket.id]) {
            this.sockets[socket.id] = socket;
            this.players[socket.id] = new Player(playerName);
            socket.emit(Constants.CLIENT_MSG.ACKNOWLEDGED);
        } else {
            socket.emit(Constants.CLIENT_MSG.ALREADY_PLAYER);
        }
    }

    removePlayer(socket) {
        if (!this.gameSelected) {
            if (!this.sockets[socket.id]) {
                socket.emit(Constants.CLIENT_MSG.NOT_A_PLAYER);
                console.log("error: socket not in game");
                return;
            }
            delete this.sockets[socket.id];
            delete this.players[socket.id];
            socket.emit(Constants.CLIENT_MSG.ACKNOWLEDGED);
            console.log("player removed successfully");
        } else {
            //game already started
            if (this.gateSelected.removePlayer(this.players[socket.id])) {
                console.log("game still continuing without player");
            } else {
                //destroy game
                this.gameSelected = null;
                kickOtherPlayers(socket);
                this.sockets = {};
                this.players = {};
                console.log("game reset");
            }
        }
    }

    kickOtherPlayers(disconnectedSocket) {
        this.sockets.forEach(socket => {
            if (socket.id != disconnectedSocket.id) {
                socket.emit(Constants.KICK_GAME_TERMINATE)
            }
        })
    }

    getPlayers() {
        return this.players;
    }
}