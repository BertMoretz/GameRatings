import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {GameDetails} from '../game-details'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

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
    }),

    test('Grid renders as container', () => {
      const props = {
        match: {
          id: 112916
        }
      }

        const game = [
   {
      "id":112916,
      "aggregated_rating":79.875,
      "artworks":[
         {
            "id":6401,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":2048,
            "image_id":"ar4xt",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/ar4xt.jpg",
            "width":4096
         },
         {
            "id":6722,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":4800,
            "image_id":"ar56q",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/ar56q.jpg",
            "width":8534
         },
         {
            "id":6723,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":4800,
            "image_id":"ar56r",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/ar56r.jpg",
            "width":8534
         }
      ],
      "cover":{
         "id":70935,
         "alpha_channel":false,
         "animated":false,
         "game":112916,
         "height":2606,
         "image_id":"co1iqf",
         "url":"//images.igdb.com/igdb/image/upload/t_thumb/co1iqf.jpg",
         "width":1955
      },
      "created_at":1543881600,
      "game_engines":[
         {
            "id":351,
            "companies":[
               168
            ],
            "created_at":1464048000,
            "logo":52,
            "name":"Unreal Engine 3",
            "slug":"unreal-engine-3",
            "updated_at":1554940800,
            "url":"https://www.igdb.com/game_engines/unreal-engine-3"
         }
      ],
      "genres":[
         {
            "id":4,
            "created_at":1297555200,
            "name":"Fighting",
            "slug":"fighting",
            "updated_at":1323216000,
            "url":"https://www.igdb.com/genres/fighting"
         }
      ],
      "involved_companies":[
         {
            "id":77358,
            "company":{
               "id":48,
               "change_date_category":7,
               "country":840,
               "created_at":1300060800,
               "description":"NetherRealm Studios company was founded in 2010 replacing WB Games Chicago and Midway Games, which purchased assets in 2009 that were formerly owned by Midway Games Chicago after Midway filed for bankruptcy. \n \nThey are based in Chicago, Illinois.",
               "developed":[
                  119,
                  1918,
                  2977,
                  3172,
                  7292,
                  8736,
                  18150,
                  19470,
                  27887,
                  27889,
                  28492,
                  75426,
                  76547,
                  112916
               ],
               "logo":1234,
               "name":"NetherRealm Studios",
               "parent":50,
               "slug":"netherrealm-studios",
               "start_date":1293753600,
               "start_date_category":2,
               "updated_at":1554854400,
               "url":"https://www.igdb.com/companies/netherrealm-studios",
               "websites":[
                  858
               ]
            }
         },
         {
            "id":77359,
            "company":{
               "id":2546,
               "change_date_category":7,
               "country":246,
               "created_at":1396310400,
               "developed":[
                  5778,
                  17329,
                  22808,
                  78754,
                  107267
               ],
               "logo":1918,
               "name":"Shiver Games",
               "published":[
                  17329,
                  22808,
                  107267
               ],
               "slug":"shiver-games",
               "start_date":1267401600,
               "start_date_category":0,
               "updated_at":1554854400,
               "url":"https://www.igdb.com/companies/shiver-games",
               "websites":[
                  1471
               ]
            }
         },
         {
            "id":77360,
            "company":{
               "id":14055,
               "change_date_category":7,
               "created_at":1513382400,
               "name":"Warner Bros. Interactive Entertainment",
               "published":[
                  5503,
                  25083,
                  41640,
                  43019,
                  52190,
                  75563,
                  78754,
                  94876,
                  96140,
                  101057,
                  101063,
                  104660,
                  106764,
                  112659,
                  112674,
                  112916,
                  114007,
                  116200
               ],
               "slug":"warner-bros-interactive-entertainment",
               "start_date_category":7,
               "updated_at":1555718400,
               "url":"https://www.igdb.com/companies/warner-bros-interactive-entertainment"
            }
         }
      ],
      "name":"Mortal Kombat 11",
      "platforms":[
         {
            "id":6,
            "abbreviation":"PC",
            "alternative_name":"mswin",
            "category":4,
            "created_at":1297555200,
            "name":"PC (Microsoft Windows)",
            "platform_logo":203,
            "slug":"win",
            "updated_at":1470009600,
            "url":"https://www.igdb.com/platforms/win",
            "versions":[
               1,
               13,
               14,
               15,
               124
            ],
            "websites":[
               2
            ]
         },
         {
            "id":48,
            "abbreviation":"PS4",
            "alternative_name":"PS4",
            "category":1,
            "created_at":1326499200,
            "generation":8,
            "name":"PlayStation 4",
            "platform_logo":107,
            "product_family":1,
            "slug":"ps4--1",
            "summary":"The PlayStation 4 system opens the door to an incredible journey through immersive new gaming worlds and a deeply connected gaming community. PS4 puts gamers first with an astounding launch line-up and over 180 games in development. Play amazing top-tier blockbusters and innovative indie hits on PS4. Developer inspired, gamer focused.",
            "updated_at":1433116800,
            "url":"https://www.igdb.com/platforms/ps4--1",
            "versions":[
               17,
               178,
               179
            ],
            "websites":[
               11
            ]
         },
         {
            "id":49,
            "abbreviation":"XONE",
            "alternative_name":"Xbone",
            "category":1,
            "created_at":1326499200,
            "generation":8,
            "name":"Xbox One",
            "product_family":2,
            "slug":"xboxone",
            "summary":"Welcome to a new generation of games and entertainment. Where games push the boundaries of realism. And television obeys your every command. Where listening to music while playing a game is a snap. And you can jump from TV to movies to music to a game in an instant. Where your experience is custom tailored to you. And the entertainment you love is all in one place. Welcome to the all-in-one, Xbox One",
            "updated_at":1429920000,
            "url":"https://www.igdb.com/platforms/xboxone",
            "versions":[
               78,
               180,
               185,
               188
            ],
            "websites":[
               12
            ]
         },
         {
            "id":130,
            "abbreviation":"switch",
            "alternative_name":"NX",
            "category":1,
            "created_at":1465948800,
            "generation":8,
            "name":"Nintendo Switch",
            "platform_logo":115,
            "product_family":5,
            "slug":"switch",
            "updated_at":1550534400,
            "url":"https://www.igdb.com/platforms/switch",
            "versions":[
               173
            ],
            "websites":[
               16
            ]
         }
      ],
      "screenshots":[
         {
            "id":268601,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc5r95",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc5r95.jpg",
            "width":1920
         },
         {
            "id":268602,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc5r96",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc5r96.jpg",
            "width":1920
         },
         {
            "id":268603,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc5r97",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc5r97.jpg",
            "width":1920
         },
         {
            "id":268604,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc5r98",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc5r98.jpg",
            "width":1920
         },
         {
            "id":268605,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc5r99",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc5r99.jpg",
            "width":1920
         },
         {
            "id":268606,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc5r9a",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc5r9a.jpg",
            "width":1920
         },
         {
            "id":268607,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc5r9b",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc5r9b.jpg",
            "width":1920
         },
         {
            "id":298938,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc6enu",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc6enu.jpg",
            "width":1920
         },
         {
            "id":298939,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc6env",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc6env.jpg",
            "width":1920
         },
         {
            "id":298940,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc6enw",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc6enw.jpg",
            "width":1920
         },
         {
            "id":298941,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc6enx",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc6enx.jpg",
            "width":1920
         },
         {
            "id":298942,
            "alpha_channel":false,
            "animated":false,
            "game":112916,
            "height":1080,
            "image_id":"sc6eny",
            "url":"//images.igdb.com/igdb/image/upload/t_thumb/sc6eny.jpg",
            "width":1920
         }
      ],
      "summary":"Mortal Kombat is back and better than ever in the next evolution of the iconic franchise. \n \nThe all new Custom Character Variations give you unprecedented control of your fighters to make them your own. The new graphics engine showcases every skull-shattering, eye-popping moment, bringing you so close to the fight you can feel it. Featuring a roster of new and returning Klassic Fighters, Mortal Kombat's best-in-class cinematic story mode continues the epic saga over 25 years in the making."
   }
]

        const shallowComponent = shallow(<GameDetails {...props}/>)
        shallowComponent.setState({game:  game})
        expect(shallowComponent).toBeDefined()
        expect(shallowComponent.debug()).toMatchSnapshot()

    	    // Test lifecycle method calls and all possible component states
    	    // console.log(shallowComponent.debug())
    	    // console.log(mountComponent.debug())
    })
})
