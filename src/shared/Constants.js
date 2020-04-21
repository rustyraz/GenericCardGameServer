module.exports = Object.freeze({
    GAMES_LOADED: [
        'SATH_AATH'
    ],
    MSG_TYPES: {
        JOIN_GAME: 'JOIN_GAME',
        DISCONNECT: 'DISCONNECT',
        PLAY_CARD: 'PLAY_CARD',
        START_GAME: 'START_GAME'
    },
    CLIENT_MSG: {
        ERROR_GAME_NOT_LOADED: "ERROR_GAME_NOT_LOADED",
        GENERIC_ERROR: "GENERIC_ERROR",
        ERROR_ILLEGAL_MOVE: "ERROR_ILLEGAL_MOVE",
        ACKNOWLEDGED: "ACKNOWLEDGED",
        ALREADY_PLAYER: "ALREADY_PLAYER",
        NOT_A_PLAYER: "NOT_A_PLAYER",
        GAME_ALREADY_STARTED: "GAME_ALREADY_STARTED",
        KICK_GAME_TERMINATE: "KICK_GAME_TERMINATE",
        CARD_NOT_FOUND: "CARD_NOT_FOUND",
        CANNOT_PLAY_CARD: "CANNOT_PLAY_CARD",
        CANNOT_FIND_DESTINATION: "CANNOT_FIND_DESTINATION",
        PICK_TRUMP: "PICK_TRUMP",
        NO_WINNER: "NO_WINNER",
        WINNER: "WINNER",
        LOCAL_WINNER: "LOCAL_WINNER",
        LOSER: "LOSER", 
        LOCAL_LOSER: "LOCAL_LOSER",
        SEND_CURRENT_HAND: "SEND_CURRENT_HAND",
        DO_ACTION: "DO_ACTION",
        YOUR_TURN: "YOUR_TURN"
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