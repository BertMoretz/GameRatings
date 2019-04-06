export const gamesListLoaded = (games) => ({
    type: 'GAMES_LIST_LOADED',
    games
})

export const gamesListLoadFailed = () => ({
    type: 'GAMES_LIST_LOADED_FAILED'
})
