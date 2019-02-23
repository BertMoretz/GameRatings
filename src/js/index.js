import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { MyAppBar } from "./my-app-bar"
import { HomePage } from "./home-page"
import { GameDetails } from "./game-details"

ReactDOM.render(
    <BrowserRouter>
      <main>
        <MyAppBar />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/game/:id" component={GameDetails}/>
          <Redirect from="*" to="/home"/>
        </Switch>
      </main>
    </BrowserRouter>,
    document.getElementById('root')
);
