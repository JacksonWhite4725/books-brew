const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Style {
    _id: ID
    name: String
    description: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    styles: [Style]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    styles: [Style]
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    saveStyle(style: String!): User
  }
`;

module.exports = typeDefs;
