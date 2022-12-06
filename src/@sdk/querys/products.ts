import { gql } from "@apollo/client";

export const getProducts = gql`
  query GetProducts {
    getProducts {
      id
      name
      stock
      price
      created_at
    }
  }
`;
