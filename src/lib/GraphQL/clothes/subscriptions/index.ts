import { gql } from 'graphql-tag'

export const SUBSCRIPTION_HOME_CLOTHES = gql`
    query SubscriptionHomeClothes {
        henry_clothes(order_by: { created_at: desc }, limit: 8) {
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
