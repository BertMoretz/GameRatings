import React, { Fragment } from "react"
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

import { CharacterCard } from "./game-obj"
import style from '../styles.css'

export class MySecondComponent extends React.Component {

    state = { }

    componentDidMount() {
        //axios.defaults.headers.common['Authorization'] = '861c079a35348acf2360c08a2efc2e90';
        axios
            .get('https://cors-anywhere.herokuapp.com/http://api-v3.igdb.com/games/?fields=name,cover.*,genres.*,platforms, summary&limit=15&&expand=cover,genres&order=popularity:desc', {headers: {
              "user-key": "861c079a35348acf2360c08a2efc2e90"
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
          return <div className={style.loading}> <CircularProgress /> </div>
        }

        return (
          <div  className={style.cards} >
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" className={style.grow}>
                GameCritic
              </Typography>
              <div className={style.search}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: style.inputRoot,
                    input: style.inputInput,
                  }}
                />
              </div>
              <Button color="inherit">Home</Button>
              <Button color="inherit">All Games</Button>
              <Button color="inherit">Companies</Button>
            </Toolbar>
          </AppBar>

          <GridList cellHeight={180} className={style.gridList} cellSpacing>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Popular Now</ListSubheader>
            </GridListTile>

            {this.state.games.map(game =>
              <CharacterCard key={game.name} character={game}/>
            )}
          </GridList>
        </div>
        )
    }
}
