import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllGames from '../all-games'

describe('AllGames', () => {
  it('test render empty component', () => {
    const initialState = {
      games: void 0,
      offset: 0
    }

    const container = renderer
      .create(
        <Router>
          <Route component={AllGames}/>
        </Router>,
      )

    expect(container.toJSON()).toMatchSnapshot()
  })
})
