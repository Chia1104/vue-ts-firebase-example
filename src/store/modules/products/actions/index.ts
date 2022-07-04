import { getProducts, getProduct } from "@chia/firebase/products/services";

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
