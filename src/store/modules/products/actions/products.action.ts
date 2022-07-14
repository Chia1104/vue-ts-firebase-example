import { getProducts, getProduct, getMoreProducts, getProductsByCategory, getMoreProductsByCategory } from "@chia/lib/firebase/products/services";

export const getProductsAction = async (context: any) => {
    context.commit('beginGetProducts');
    try {
        const products = await getProducts();
        if(!products) {
            context.commit('failGetProducts', 'No product found');
            return;
        }
        if(products.length < 8) context.commit('hasMoreProducts', false);
        context.commit('successGetProducts', products);
    } catch (e) {
        context.commit('failGetProducts', e);
    }
}

export const getMoreProductsAction = async (context: any, lastProductId: string) => {
    context.commit('beginGetMoreProducts');
    try {
        const products = await getMoreProducts(lastProductId);
        if(!products) {
            context.commit('failGetMoreProducts', 'No product found');
            return;
        }
        if(products.length < 8) context.commit('hasMoreProducts', false);
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
            context.commit('failGetProduct', 'No product found');
            return;
        }
        context.commit('successGetProduct', product);
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
