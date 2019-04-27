import axios from "axios"
import * as actionCreators from "./index"


export const loadGamesActionCreator = (values = {}) => (dispatch) => {
    const { query, aliveOnly } = values

    const queryParams = []

    if (query) {
        queryParams.push(`${query}`)
    }

    if (aliveOnly) {
        queryParams.push('status=alive')
    }

    const searchQuery = queryParams.length > 0 ? `?${queryParams.join(' ')}` : ''

    axios({
      url: "https://cors-anywhere.herokuapp.com/http://api-v3.igdb.com/games",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'user-key': "861c079a35348acf2360c08a2efc2e90"
      },
      data: `search "${searchQuery}"; fields name,cover.*,aggregated_rating;`
    })
    .then(response => {
      dispatch(actionCreators.gamesListLoaded(response.data))
    })
    .catch((err) => {
      dispatch(actionCreators.gamesListLoadFailed())
    });
}
