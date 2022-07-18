import { getProducts, getProduct, getMoreProducts, getProductsByCategory, getMoreProductsByCategory } from "@chia/lib/firebase/products/services";
import apolloClient from "@chia/lib/GraphQL/apolloClient";
import { GET_CLOTHES, GET_CLOTHES_BY_ID } from "@chia/lib/GraphQL/clothes/queries";

export const getProductsAction = async (context: any) => {
    context.commit('beginGetProducts');
    try {
        const products = await apolloClient.request(GET_CLOTHES, {
            offset: 0,
        })
        if(! products.clothes) {
            context.commit('failGetProducts', 'No product found');
            return;
        }
        if( products.clothes.length < 8) context.commit('hasMoreProducts', false);
        context.commit('successGetProducts', products.clothes);
    } catch (e) {
        context.commit('failGetProducts', e);
    }
}

export const getMoreProductsAction = async (context: any, offset: number) => {
    context.commit('beginGetMoreProducts');
    try {
        const products = await apolloClient.request(GET_CLOTHES, {
            offset: offset,
        })
        if(! products.clothes) {
            context.commit('failGetMoreProducts', 'No product found');
            return;
        }
        if( products.clothes.length < 8) context.commit('hasMoreProducts', false);
        context.commit('successGetMoreProducts',  products.clothes);
    } catch (e) {
        context.commit('failGetMoreProducts', e);
    }
}

export const getProductAction = async (context: any, { id }: {id: string}) => {
    context.commit('beginGetProduct');
    try {
        const product = await apolloClient.request(GET_CLOTHES_BY_ID, {
            id: id,
        })
        if(!product.clothes) {
            context.commit('failGetProduct', 'No product found');
            return;
        }
        context.commit('successGetProduct',  product.clothes[0]);
    } catch (e) {
        context.commit('failGetProduct', e);
    }
}

export const getProductsByCategoryAction = async (context: any, { category }: {category: string[]}) => {
    context.commit('beginGetCategoryProducts');
    context.commit('hasMoreCategoryProducts', true);
    try {
        const products = await getProductsByCategory(category);
        if(!products) {
            context.commit('failGetCategoryProducts', 'No product found');
            return;
        }
        if(products.length < 8) context.commit('hasMoreCategoryProducts', false);
        context.commit('successGetCategoryProducts', products);
    } catch (e) {
        context.commit('failGetCategoryProducts', e);
    }
}

export const getMoreProductsByCategoryAction = async (context: any, { category, lastProductId }: {category: string[], lastProductId: string}) => {
    context.commit('beginGetMoreCategoryProducts');
    try {
        const products = await getMoreProductsByCategory(lastProductId, category);
        if(!products) {
            context.commit('failGetMoreCategoryProducts', 'No product found');
            return;
        }
        if(products.length < 8) context.commit('hasMoreCategoryProducts', false);
        context.commit('successGetMoreCategoryProducts', products);
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
