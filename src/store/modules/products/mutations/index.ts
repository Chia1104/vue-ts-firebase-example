import type { productStateType } from "@chia/store/modules/products/states";
import type {Product} from "@chia/utils/types/product";

export const beginGetProducts = (state: productStateType) => {
    state.products.isLoading = true;
}

export const successGetProducts = (state: productStateType, payload: Product[]) => {
    state.products.isLoading = false;
    state.products.isSuccess = true;
    state.products.isError = false;
    state.products.error = null;
    state.products.data = payload;
}

export const failGetProducts = (state: productStateType, payload: string) => {
    state.products.isSuccess = false;
    state.products.isLoading = false;
    state.products.isError = true;
    state.products.error = payload;
}

export const beginGetProduct = (state: productStateType) => {
    state.product.isLoading = true;
}

export const successGetProduct = (state: productStateType, payload: Product) => {
    state.product.isLoading = false;
    state.product.isSuccess = true;
    state.product.isError = false;
    state.product.error = null;
    state.product.data = payload;
}

export const failGetProduct = (state: productStateType, payload: string) => {
    state.product.isSuccess = false;
    state.product.isLoading = false;
    state.product.isError = true;
    state.product.error = payload;
}
