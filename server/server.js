const express = require('express');
//to add apollo server here line 2
const { ApolloServer } = require('apollo-server-express');
const path = require('path'); 
//to add schemas
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection'); 
const {authMiddleware} = require('./utils/auth');

// const routes = require('./routes'); //no need

const app = express(); //need
const PORT = process.env.PORT || 3001; //need
// to add lines 9-12,14

const startServer = async () => {
  // Create a new instance of an Apollo server with the GraphQL schema
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Add context to our server so data from the `authMiddleware()` function can pass data to our resolver functions
    context: authMiddleware,
  });

  await server.start();
  // Update Express.js to use Apollo server features
  server.applyMiddleware({ app });
  return server;
};

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });
// await server.start();
// server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: false })); //change to extended false
app.use(express.json()); //need

// askBCS told me to replace first line see new line in line 48 replaced line 44
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

if (true) {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


//need change console log
// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`)
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   );


// });

db.once("open", async () => {
  // calling and awaiting function that starts server
  server = await startServer();
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
