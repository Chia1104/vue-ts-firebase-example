import { gql } from 'graphql-tag'

export const GET_CLOTHES = gql`
    query GetClothes {
        henry_clothes(order_by: { createdAt: desc }) {
            name
            price
            id
            createdAt
            description
            excerpt
            img_src
            category
        }
    }
`;
