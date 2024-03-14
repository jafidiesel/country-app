//import { gql } from "@apollo/client";
import { gql } from "@apollo/client/index.js";

// This query will only return the code, the name and the flag of the countries
export const GET_ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      code
      name
      emoji
    }
  }
`;

export const GET_COUNTRY_BY_NAME = (name: string) => gql`
    query {
        countries(filter: { name: { regex: "^${name}" } }) {
        code
        name
        currency
        capital
        states {
          name
        }
        subdivisions {
          name
        }
        languages {
          code
          name
        }
      }
    }
`;

export const GET_COUNTRY_ARGENTINA = gql`
  query {
    countries(filter: { name: { regex: "^Argentina" } }) {
      code
      name
      currency
    }
  }
`;
