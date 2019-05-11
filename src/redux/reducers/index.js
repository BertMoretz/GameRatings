const initialState = {
    games: [],
    gamesLoadingFailed: false,
    isFetching: false
};

export const reducer = (oldStore = initialState, action) => {

    if (action.type === 'GAMES_LIST_LOADED') {
        return {
            games: action.games,
            gamesLoadingFailed: false,
            isFetching: false
        }
    }

    if(action.type === 'GAMES_LIST_LOADED_FAILED') {
        return {
            games: [],
            gamesLoadingFailed: true,
            isFetching: false
        }
    }

    if(action.type === 'GAMES_LIST_FETCHING') {
        return {
            games: [],
            gamesLoadingFailed: false,
            isFetching: true
        }
    }
    return oldStore
};
