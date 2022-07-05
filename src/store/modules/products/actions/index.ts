import { getProducts, getProduct, getMoreProducts } from "@chia/lib/firebase/products/services";
import type { Product } from "@chia/utils/types/product";

export const getProductsAction = async (context: any) => {
    context.commit('beginGetProducts');
    try {
        const products = await getProducts();
        if(!products) {
            context.commit('failGetProducts', 'No home found');
            return;
        }
        context.commit('successGetProducts', products);
    } catch (e) {
        context.commit('failGetProducts', e);
    }
}

export const getMoreProductsAction = async (context: any, lastProduct: Product) => {
    context.commit('beginGetMoreProducts');
    try {
        const products = await getMoreProducts(lastProduct);
        if(!products) {
            context.commit('failGetMoreProducts', 'No home found');
            return;
        }
        context.commit('successGetMoreProducts', products);
    } catch (e) {
        context.commit('failGetMoreProducts', e);
    }
}

export const getProductAction = async (context: any, { id }: {id: string}) => {
    context.commit('beginGetProduct');
    try {
        const product = await getProduct(id);
        if(!product) {
            context.commit('failGetProduct', 'No home found');
            return;
        }
        context.commit('successGetProduct', product);
    } catch (e) {
        context.commit('failGetProduct', e);
    }
}
