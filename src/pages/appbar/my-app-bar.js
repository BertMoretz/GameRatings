import React, { Fragment } from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

import style from './styles.css'
import logo from '../../imgs/logo.png'

export class MyAppBar extends React.Component {

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
            />
          </div>
          <Button color="inherit">Home</Button>
          <Button color="inherit">All Games</Button>
          <Button color="inherit">Companies</Button>
        </Toolbar>
      </AppBar>
    )
  }
}
