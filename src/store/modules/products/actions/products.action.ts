import graphqlClient from "@chia/lib/GraphQL/graphqlClient";
import { GET_CLOTHES, GET_CLOTHES_BY_ID, GET_CLOTHES_BY_CATEGORY, GET_MORE_CLOTHES_BY_CATEGORY } from "@chia/lib/GraphQL/clothes/queries";

export const getProductsAction = async (context: any) => {
    context.commit('beginGetProducts');
    try {
        const client = await graphqlClient();
        const products = await client.request(GET_CLOTHES, {
            offset: 0,
        })
        if(!products.henry_clothes) {
            context.commit('failGetProducts', 'No product found');
            return;
        }
        if( products.henry_clothes.length < 8) context.commit('hasMoreProducts', false);
        context.commit('successGetProducts', products.henry_clothes);
    } catch (e) {
        context.commit('failGetProducts', e);
    }
}

export const getMoreProductsAction = async (context: any, offset: number) => {
    context.commit('beginGetMoreProducts');
    try {
        const client = await graphqlClient();
        const products = await client.request(GET_CLOTHES, {
            offset: offset,
        })
        if(!products.henry_clothes) {
            context.commit('failGetMoreProducts', 'No product found');
            return;
        }
        if( products.henry_clothes.length < 8) context.commit('hasMoreProducts', false);
        context.commit('successGetMoreProducts',  products.henry_clothes);
    } catch (e) {
        context.commit('failGetMoreProducts', e);
    }
}

export const getProductAction = async (context: any, { id }: {id: string}) => {
    context.commit('beginGetProduct');
    try {
        const client = await graphqlClient();
        const product = await client.request(GET_CLOTHES_BY_ID, {
            id: id,
        })
        if(!product.henry_clothes) {
            context.commit('failGetProduct', 'No product found');
            return;
        }
        context.commit('successGetProduct',  product.henry_clothes[0]);
    } catch (e) {
        context.commit('failGetProduct', e);
    }
}

export const getProductsByCategoryAction = async (context: any, { category }: {category: string}) => {
    context.commit('beginGetCategoryProducts');
    context.commit('hasMoreCategoryProducts', true);
    try {
        const client = await graphqlClient();
        const products = await client.request(GET_CLOTHES_BY_CATEGORY, {
            category_jsonb: category,
        })
        if(!products.henry_clothes) {
            context.commit('failGetCategoryProducts', 'No product found');
            return;
        }
        if(products.henry_clothes.length < 8) context.commit('hasMoreCategoryProducts', false);
        context.commit('successGetCategoryProducts', products.henry_clothes);
    } catch (e) {
        context.commit('failGetCategoryProducts', e);
    }
}

export const getMoreProductsByCategoryAction = async (context: any, { category, offset }: {category: string, offset: number}) => {
    context.commit('beginGetMoreCategoryProducts');
    try {
        const client = await graphqlClient();
        const products = await client.request(GET_MORE_CLOTHES_BY_CATEGORY, {
            category_jsonb: category,
            offset: offset,
        })
        if(!products.henry_clothes) {
            context.commit('failGetMoreCategoryProducts', 'No product found');
            return;
        }
        if(products.henry_clothes.length < 8) context.commit('hasMoreCategoryProducts', false);
        context.commit('successGetMoreCategoryProducts', products.henry_clothes);
    } catch (e) {
        context.commit('failGetMoreCategoryProducts', e);
    }
}

export const resetProductsAction = (context: any) => {
    context.commit('resetProducts');
}

export const resetCategoryProductsAction = (context: any) => {
    context.commit('resetCategoryProduct');
}
