import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GameDetails from '../game-details'

describe('GameDetails', () => {
  it('test render empty component', () => {
    const initialState = {
      game: void 0
    }

    const container = renderer
      .create(
        <Router>
          <Route component={GameDetails}/>
        </Router>
      )

      expect(container.toJSON()).toMatchSnapshot()
    })
})
