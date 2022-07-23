import { gql } from "graphql-tag";

export const GET_ROTED13_STRING = gql`
  mutation Rot13($arg1: SampleInput!) {
    rot13Action(arg1: $arg1) {
      roted13
    }
  }
`;
