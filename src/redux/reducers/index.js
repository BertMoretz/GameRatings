const initialState = {
    games: [],
    gamesLoadingFailed: false
};

export const reducer = (oldStore = initialState, action) => {

    if (action.type === 'GAMES_LIST_LOADED') {
        return {
            games: action.games,
            gamesLoadingFailed: false
        }
    }

    if(action.type === 'GAMES_LIST_LOADED_FAILED') {
        return {
            games: [],
            gamesLoadingFailed: true
        }
    }
    return oldStore
};
