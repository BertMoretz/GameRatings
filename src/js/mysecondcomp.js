import React, { Fragment } from "react"
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { CharacterCard } from "./game-obj"

export class MySecondComponent extends React.Component {

    state = { }

    componentDidMount() {
        //axios.defaults.headers.common['Authorization'] = '861c079a35348acf2360c08a2efc2e90';
        axios
            .get('https://cors-anywhere.herokuapp.com/http://api-v3.igdb.com/games/?fields=*,popularity&order=popularity:desc', {headers: {
              "user-key": "861c079a35348acf2360c08a2efc2e90",
              "Access-Control-Allow-Origin": "http://localhost:9000"
            }})
            .then(response => {
                 console.log('Axios returned', response.data)
                this.setState( {
                  games: response.data
                })
          });
      }

    render() {
        if(!this.state.games) {
          return <h1>Loading</h1>
        }

        return (
          <Grid container spacing={16}>
              {this.state.games.map(game =>
                  <CharacterCard key={game.name} character={game} />
              )}
          </Grid>
        )
    }
}
