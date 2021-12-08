import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`
export const SAVE_STYLE = gql`
  mutation saveStyle($name: String!, $description: String!) {
    saveStyle(name: $name, description: $description) {
      _id
      firstName
      lastName
      email
      styles {
        name
        description
      }
    }
  }
`
;
