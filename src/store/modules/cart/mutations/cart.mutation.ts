import type {Cart} from "@chia/utils/types/cart";
import type {cartStateType} from "@chia/store/modules/cart/states";

export const addProductToCart = (state: cartStateType, payload: Cart) => {
    state.cart.push(payload);
}

export const removeProductFromCart = (state: cartStateType, payload: Cart) => {
    state.cart = state.cart.filter(product => product.productId !== payload.productId);
}

export const clearCart = (state: cartStateType) => {
    state.cart = [];
}
