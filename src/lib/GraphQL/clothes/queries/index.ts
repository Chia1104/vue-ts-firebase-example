import { gql } from "graphql-request";

export const GET_HOME_CLOTHES = gql`
  query GetHomeClothes {
    clothes(order_by: { created_at: desc }, limit: 8) {
      name
      price
      id
      created_at
      description
      excerpt
      img_src
      category
    }
  }
`;

export const GET_CLOTHES = gql`
  query GetClothes($offset: Int!) {
    clothes(order_by: { created_at: desc }, limit: 8, offset: $offset) {
      name
      price
      id
      created_at
      description
      excerpt
      img_src
      category
    }
  }
`;

export const GET_CLOTHES_BY_ID = gql`
  query GetClothesById($id: uuid!) {
    clothes(where: { id: { _eq: $id } }) {
      id
      name
      price
      img_src
      excerpt
      description
      created_at
      category
    }
  }
`;

export const GET_CLOTHES_BY_CATEGORY = gql`
  query GetClothesByCategory($category_jsonb: jsonb!) {
    clothes(
      where: { category_jsonb: { _contains: $category_jsonb } }
      limit: 8
      offset: 0
    ) {
      id
      name
      price
      img_src
      excerpt
      description
      created_at
      category
    }
  }
`;

export const GET_MORE_CLOTHES_BY_CATEGORY = gql`
  query GetMoreClothesByCategory($category_jsonb: jsonb!, $offset: Int!) {
    clothes(
      where: { category_jsonb: { _contains: $category_jsonb } }
      limit: 8
      offset: $offset
    ) {
      id
      name
      price
      img_src
      excerpt
      description
      created_at
      category
    }
  }
`;
