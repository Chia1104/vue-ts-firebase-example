import { gql } from 'graphql-tag'

export const GET_HOME_CLOTHES = gql`
    query GetClothes {
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

export const GET_CLOTHES_BY_ID = gql`
    query GetClothes($id: uuid!) {
        clothes(where: {id: {_eq: $id}}) {
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
