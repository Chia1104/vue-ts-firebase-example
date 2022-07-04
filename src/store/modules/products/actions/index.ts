import { getProducts } from "@chia/firebase/products/services/products.service";

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
