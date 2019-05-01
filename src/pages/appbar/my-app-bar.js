import React, { Fragment } from "react"
import axios from 'axios'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom"
import { SearchElement } from "./search-element"

import { store } from '../../redux/store'
import { connect } from "react-redux"
import * as actions from "../../redux/actionCreators/searchParamsChange"
import * as actionCreators from "../../redux/actionCreators"

import { reduxForm, Field } from 'redux-form'

import style from './styles.css'
import logo from '../../imgs/logo.png'

const CustomInput = (props) => {
    return <InputBase
      placeholder="Search…"
      {...props}
      value={props.input.value}
      onChange={props.input.onChange}
    />
}

class MyAppBar extends React.Component {

  buildDetailsClickHandler = (link) => () => {
     this.props.history.replace(`/${link}`)
  }

  clickHandler = (game) => () => {
    this.props.gamesListLoaded([]);
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
          <Field
            name="query"
            component={CustomInput}
          />
        { this.props.isFetching ?
            <List component="div" className={style.resultWindow}>
              <ListItem>
                <ListItemIcon>
                  <CircularProgress />
                </ListItemIcon>
                <ListItemText primary={"Searching..."} />
              </ListItem>
            </List>
              :
              this.props.games && this.props.games.length != 0 ?
              <List component="div" className={style.resultWindow}>
                {this.props.games.map(game =>
                  <SearchElement
                    key={game.name}
                    game={game}
                    handleDetailsClick={this.clickHandler(game)}
                    />
                )}
                </List>:
              " "
            }

          </div>
          <Button color="inherit" onClick={this.buildDetailsClickHandler("home").bind(this)}>Home</Button>
          <Button color="inherit" onClick={this.buildDetailsClickHandler("all/1")}> All Games</Button>
        </Toolbar>
      </AppBar>
    )
  }
};

const mapStateToProps = (state) => ({
    games: state.app.games,
    loadFailed: state.app.gamesLoadingFailed,
    isFetching: state.app.isFetching
});

const mapDispatchToProps = (dispatch) => ({
    gamesListLoaded: (games) => {
        dispatch(actionCreators.gamesListLoaded(games))
    }
});

export default reduxForm({
    form: 'search',
    onChange: (values, dispatch) => dispatch(actions.searchParamsChange(values))
}) (connect(mapStateToProps, mapDispatchToProps)(withRouter(MyAppBar)))
