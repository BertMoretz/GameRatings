import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import { MemoryRouter, BrowserRouter as Router, Route } from 'react-router-dom';

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
      const props = {
        match: {
          page: 6
        }
      }

      const game = [{
        "id": 36950,
        "aggregated_rating": 61.0,
        "cover": {
          "id": 71030,
          "alpha_channel": false,
          "animated": false,
          "game": 36950,
          "height": 960,
          "image_id": "co1it2",
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1it2.jpg",
          "width": 677
        },
        "genres": [
          {
            "id": 5,
            "created_at": 1297555200,
            "name": "Shooter",
            "slug": "shooter",
            "updated_at": 1323216000,
            "url": "https://www.igdb.com/genres/shooter"
          },
          {
            "id": 12,
            "created_at": 1297555200,
            "name": "Role-playing (RPG)",
            "slug": "role-playing-rpg",
            "updated_at": 1323216000,
            "url": "https://www.igdb.com/genres/role-playing-rpg"
          },
          {
            "id": 31,
            "created_at": 1323561600,
            "name": "Adventure",
            "slug": "adventure",
            "updated_at": 1323561600,
            "url": "https://www.igdb.com/genres/adventure"
          }
        ],
        "name": "Anthem",
        "platforms": [
          6,
          48,
          49
        ],
        "summary": "Anthem is a shared-world action RPG, where players can delve into a vast landscape teeming with amazing technology and forgotten treasures. This is a world where Freelancers are called upon to defeat savage beasts, ruthless marauders, and forces plotting to conquer humanity."
      }]

      const shallowComponent = shallow(<AllGames {...props}/>)
      shallowComponent.setState({games:  game})
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
