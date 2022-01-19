const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    BookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Query {
    me: {username: String!
    email: String!
    password: String
    savedBooks: [String]
    }
  }
`;
// type Mutation
//type User later
// type Auth later

module.exports = typeDefs;
