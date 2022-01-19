const express = require('express');
//to add apollo server here line 2
const { ApolloServer } = require('apollo-server-express');
const path = require('path'); 
//to add schemas
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection'); // need
// const routes = require('./routes'); //no need

const app = express(); //need
const PORT = process.env.PORT || 3001; //need
// to add lines 9-12,14

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: false })); //change to extended false
app.use(express.json()); //need

// if we're in production, serve client/build as static assets 
//to keep
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes); //no need

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


//need change console log
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

});
