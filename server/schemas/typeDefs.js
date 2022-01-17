const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    BookId: ID
    authors: [Author]
    description: String
    title: String
  }

  type Query {
    me: [User]
  }
`;
// type Mutation
//type User later
// type Auth later

module.exports = typeDefs;
