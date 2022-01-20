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

type Auth {
// token and user

}
type Mutation {
    # Set the required fields for new schools
    addUser(username: String!, email: String!, password: String!, savedBooks: [String]): School
  }


`;
// type Mutation: loginUser, addUser, saveBook, removeBook
module.exports = typeDefs;
