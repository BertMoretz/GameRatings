import { reducer } from '../index';

	test('reducer for GAMES_LIST_LOADED action', () => {
	    let state;
	    state = reducer({ games: [], gamesLoadingFailed: false }, {
	        type: 'GAMES_LIST_LOADED', games: [
            {
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
	    });

	    expect(state).toMatchSnapshot()

	});
