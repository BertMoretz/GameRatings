import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import axios from 'axios';
import moxios from 'moxios';

import {AllGames} from '../all-games'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

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
  }),

  test('Grid renders as container', () => {

      const shallowComponent = shallow(<AllGames/>)
      expect(shallowComponent).toBeDefined()
      expect(shallowComponent.debug()).toMatchSnapshot()

  	    // Test lifecycle method calls and all possible component states
  	    // console.log(shallowComponent.debug())
  	    // console.log(mountComponent.debug())
  }),

  it('test api', () => {

      let onFulfilled = jest.fn()

      moxios.stubRequest('https://cors-anywhere.herokuapp.com/http://api-v3.igdb.com/games', {
          status: 200,
          response: {
              results: [{ test: 'game' }]
          }
      })

      axios.get('https://cors-anywhere.herokuapp.com/http://api-v3.igdb.com/games').then(onFulfilled)

      moxios.wait(function () {
        expect(onFulfilled).toBeCalled();
        expect(onFulfilled.mock.calls[0][0]).toMatchSnapshot();
        done()
      })
  })

  afterEach(() => {
      moxios.uninstall()
  })
})
