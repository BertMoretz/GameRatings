import { loadGamesActionCreator } from "./loadGames"


export const searchParamsChange = (values) => (dispatch) => {

    dispatch(loadGamesActionCreator(values))

    if (values.query) {
	        window.history.pushState(null, values.query, `/home/${values.query}`)
	    }

}
