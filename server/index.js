require('dotenv').config();
const {SERVER_PORT, CONNECTION_STRING} = process.env

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const app = express();

massive(CONNECTION_STRING).then(db => {
    console.log('db is connected')
    app.set('db', db)
}).catch( err =>{
    console.error('there was an error connecting to db', err)
})


app.use(bodyParser.json());

app.get('/api/houses',controller.getHouses);
app.post('/api/houses',controller.createHouse);
app.delete('/api/houses/:id',controller.deleteHouse)

port=SERVER_PORT;
app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})

