const fs = require('fs')
const path = require('path')

console.log('port', process.env.PORT)
const port = process.env.PORT

module.exports = (app) => {

    app.get('/games/', (request, response) => {
        if (port === '1234') {
            fs.readFile(
                path.resolve(__dirname, 'games.json'),
                { encoding: 'utf8' },
                (err, data) => {
                    response.type('application/json').send(data)
                }
            )
        } else{
            fs.readFile(
                path.resolve(__dirname, 'games1.json'),
                { encoding: 'utf8' },
                (err, data) => {
                    response.type('application/json').send(data)
                }
            )
        }


    })

}
