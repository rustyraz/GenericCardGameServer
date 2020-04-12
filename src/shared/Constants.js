module.exports = Object.freeze({
    GAMES_LOADED: {
        SATH_AATH: 'SATH_AATH'
    },
    MSG_TYPES: {
        JOIN_GAME: 'JOIN_GAME',
        DISCONNECT: 'DISCONNECT',
        PLAY_CARD: 'PLAY_CARD',
        START_GAME: 'START_GAME',
    },
    CLIENT_MSG: {
        ERROR_GAME_NOT_LOADED: "ERROR_GAME_NOT_LOADED",
        ERROR_ILLEGAL_MOVE: "ERROR_ILLEGAL_MOVE",
        ACKNOWLEDGED: "ACKNOWLEDGED",
        ALREADY_PLAYER: "ALREADY_PLAYER",
        NOT_A_PLAYER: "NOT_A_PLAYER",
        GAME_ALREADY_STARTED: "GAME_ALREADY_STARTED",
        KICK_GAME_TERMINATE: "KICK_GAME_TERMINATE",
        CARD_NOT_FOUND: "CARD_NOT_FOUND"
    },
    POSSIBLE_ACTIONS: {
        PLAY_CARD: "PLAY_CARD",
        REQUEST_CARD: "REQUEST_CARD",
        RESIGN: "RESIGN",
        OFFER_RESTART: "OFFER_RESTART"
    },
    MAX_CARD_NUMBER: 13,
    CARD_TYPES: {
        CLUB: "CLUB",
        DIAMOND: "DIAMOND",
        HEART: "HEART",
        SPADE: "SPADE"
    }
  });