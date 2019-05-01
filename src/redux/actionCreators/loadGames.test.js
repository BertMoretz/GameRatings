import axios from 'axios';
import moxios from 'moxios';
import { loadGamesActionCreator } from "./loadGames"


const dispatch = jest.fn()


describe('action loadGamesActionCreator', () => {

    beforeEach(() => {
        moxios.install()

    })

    it('tests moxios', (done) => {

        let onFulfilled = jest.fn()

        moxios.stubRequest('/say/hello', {
            status: 200,
            responseText: 'hello'
        })

        axios.get('/say/hello').then(onFulfilled)

        moxios.wait(function () {
            expect(onFulfilled).toBeCalled()
            console.log('Hmmm')
            done()
        })
    })

    it('works fine', (done) => {

        moxios.stubRequest('https://cors-anywhere.herokuapp.com/http://api-v3.igdb.com/games', {
            status: 200,
            responseText: {
                results: [{ test: 'game' }]
            }
        })

        const dispatcher = loadGamesActionCreator()
        expect(typeof dispatcher).toBe('function')

        dispatcher(dispatch)

        moxios.wait(function () {
            const req = moxios.requests.mostRecent()
            expect(dispatch).toBeCalledTimes(2)
            expect(dispatch.mock.calls[0][0]).toMatchSnapshot()
            done()
        })
    })

    afterEach(() => {
        moxios.uninstall()
    })

})
