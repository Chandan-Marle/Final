const express = require('express');
const Datastore = require('nedb');


const app = express();
app.listen(3000, () => console.log('listening at 3000'));

app.use(express.static('public'));

const database = new Datastore('database.db');
database.loadDatabase();

database.insert("hell0");