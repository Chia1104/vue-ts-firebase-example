import type {Cart} from "@chia/utils/types/cart";
import type {cartStateType} from "@chia/store/modules/cart/states";

export const addProductToCart = (state: cartStateType, payload: Cart) => {
    let cartItems = [];
    const product = state.data.find(i => i.productId === payload.productId);
    if (product) {
        cartItems = state.data.map(i => i.productId === payload.productId ? payload : i);
        state.data = cartItems;
        return;
    }
    state.data.push(payload);
}

export const removeProductFromCart = (state: cartStateType, payload: string) => {
    state.data = state.data.filter(product => product.productId !== payload);
}

export const clearCart = (state: cartStateType) => {
    state.data = [];
    state.total = 0;
    state.count = 0;
}
