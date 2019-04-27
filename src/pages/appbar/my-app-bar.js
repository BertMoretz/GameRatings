import React, { Fragment } from "react"
import axios from 'axios'
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom"
import { SearchElement } from "./search-element"

import { store } from '../../redux/store'
import * as actionCreators from "../../redux/actionCreators"
import { connect } from "react-redux"

import style from './styles.css'
import logo from '../../imgs/logo.png'

class MyAppBar extends React.Component {

  state = {
    searchQuery: ""
  }

  search = (query) => {

        axios({
        url: "https://cors-anywhere.herokuapp.com/http://api-v3.igdb.com/games",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'user-key': "861c079a35348acf2360c08a2efc2e90"
        },
        data: `search "${query}"; fields name,cover.*,aggregated_rating;`
      })
      .then(response => {
        console.log('Axios returned', response.data);
        this.props.gamesListLoaded(response.data)
      }).catch((err) => {
         this.props.gamesListLoadFailed()
      });

  }


  buildDetailsClickHandler = (link) => () => {
     this.props.history.replace(`/${link}`)
  }

  handleChange = event => {
    this.setState({
	     searchQuery: event.target.value,
    }, () => {
      this.search(this.state.searchQuery);
    })

  }

  clickHandler = (game) => () => {
    this.props.gamesListLoaded([])
    this.props.history.replace(`/game/${game.id}`)
   }

  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <div className={style.grow}>
            <img src={logo} className={style.logo}/>
          </div>
          <div className={style.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: style.inputRoot,
                input: style.inputInput,
              }}
              onChange={this.handleChange}
              value={this.state.searchQuery}
            />
          {
            this.props.games.length != 0 ?
              <List component="div" className={style.resultWindow}>
                {this.props.games.map(game =>
                  <SearchElement
                    key={game.name}
                    game={game}
                    handleDetailsClick={this.clickHandler(game)}
                    />
                )}
              </List>: " "
          }

          </div>
          <Button color="inherit" onClick={this.buildDetailsClickHandler("home").bind(this)}>Home</Button>
          <Button color="inherit" onClick={this.buildDetailsClickHandler("all")}> All Games</Button>
        </Toolbar>
      </AppBar>
    )
  }
};

const mapStateToProps = (state) => ({
    games: state.games,
    loadFailed: state.gamesLoadingFailed
});

const mapDispatchToProps = (dispatch) => ({
    gamesListLoaded: (games) => {
        dispatch(actionCreators.gamesListLoaded(games))
    },
    gamesListLoadFailed: () => {
        dispatch(actionCreators.gamesListLoadFailed())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyAppBar))
