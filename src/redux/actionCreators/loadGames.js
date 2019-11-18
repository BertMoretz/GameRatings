import axios from "axios"
import * as actionCreators from "./index"
import { getFormValues } from "redux-form"


export const loadGamesActionCreator = (values = {}) => (dispatch) => {
  const { query, aliveOnly } = values
    const queryParams = []

    if (query) {
        queryParams.push(query)
    }

    const searchQuery = queryParams.length > 0 ? `${queryParams.join(' ')}` : ''

    dispatch(actionCreators.gamesListFetching());

    axios({
      url: "https://cors-anywhere.herokuapp.com/http://api-v3.igdb.com/games",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'user-key': "bf64f9cdc5dcd51330d432e658773047"
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
