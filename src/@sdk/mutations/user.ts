import { gql } from "@apollo/client";

export const newUser = gql`
  mutation NewUser($input: UserInput) {
    newUser(input: $input) {
      id
      name
      email
      surname
    }
  }
`;

export const validateUser = gql`
  mutation NewUser($input: UserInput) {
    newUser(input: $input) {
      id
      name
      email
      surname
    }
  }
`;
