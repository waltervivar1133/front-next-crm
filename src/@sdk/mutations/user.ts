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

export const authenticatedUser = gql`
  mutation AuthenticatedUser($input: AuthenticatedUser) {
    authenticatedUser(input: $input) {
      token
    }
  }
`;
