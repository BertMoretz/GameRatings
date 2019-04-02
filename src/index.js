import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from "react-redux"

import { MyAppBar } from "./pages/appbar/my-app-bar"
import  HomePage  from "./pages/home/home-page"
import { GameDetails } from "./pages/details/game-details"
import { store } from "./redux/store"
import { AllGames } from "./pages/allgames/all-games"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <main>
        <MyAppBar />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/game/:id" component={GameDetails}/>
          <Route path="/all" component={AllGames} />
          <Redirect from="*" to="/home"/>
        </Switch>
      </main>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
