import React, { Fragment } from "react"
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

import { GameObj } from "./game-obj"
import style from './styles.css'

import * as actionCreators from "../../redux/actionCreators"
import { connect } from "react-redux"
import { store } from '../../redux/store';

 class HomePage extends React.Component {

   state = {
     
   }

    componentDidMount() {
      this.loadGames();
    }

    loadGames = () => {
      axios
          .get(BACKEND_URL + 'games/?fields=name,cover.*,genres.*,platforms,popularity,summary,aggregated_rating&limit=10&&expand=cover,genres&order=popularity:desc', {headers: {
            "user-key": "861c079a35348acf2360c08a2efc2e90"
          }})
          .then(response => {
              console.log('Axios returned', response)
              this.setState({
                games: response.data
              })
          })
          .catch((err) => {

          });
    }

    buildDetailsClickHandler = (game) => () => {
       this.props.history.push(`/game/${game.id}`)
     }

    render() {
        if(!this.state.games) {
          return <div className={style.loading}> <CircularProgress /> </div>
        }

        if (this.state.loadFailed) {
            return <h3>Error loading data from API</h3>
        }

        return (
          <div  className={style.cards} >

            <GridList cellHeight={180} className={style.gridList} cellSpacing>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Popular Now</ListSubheader>
              </GridListTile>

              {this.state.games.map(game =>
                <GameObj
                  key={game.name}
                  character={game}
                  handleDetailsClick={this.buildDetailsClickHandler(game)}
                  />
              )}
            </GridList>
          </div>
        )
    }
}



export default (HomePage)
