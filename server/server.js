const express = require('express');
//to add apollo server here line 2
const path = require('path'); //do not beed
//to add schemas
const db = require('./config/connection'); // need
const routes = require('./routes'); //no need

const app = express(); //need
const PORT = process.env.PORT || 3001; //need
// to add lines 9-12,14

app.use(express.urlencoded({ extended: true })); //change to extended false
app.use(express.json()); //need

// if we're in production, serve client/build as static assets 
//to keep
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes); //no need


//need change console log
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
