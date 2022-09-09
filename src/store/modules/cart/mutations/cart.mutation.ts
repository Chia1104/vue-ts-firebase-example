import type { Cart } from "@chia/shared/types/cart";
import type { cartStateType } from "@chia/store/modules/cart/states";

export const addProductToCart = (state: cartStateType, payload: Cart) => {
  let cartItems = [];
  const product = state.data.find((i) => i.productId === payload.productId);
  if (product) {
    cartItems = state.data.map((i) =>
      i.productId === payload.productId ? payload : i
    );
    state.data = cartItems;
    state.count = cartItems
      .map((i) => i.productQuantity)
      .reduce((a, b) => a + b, 0);
    state.total = cartItems
      .map((i) => i.productQuantity * i.productPrice)
      .reduce((a, b) => a + b, 0);
    return;
  }
  state.data.push(payload);
  state.count = state.data
    .map((i) => i.productQuantity)
    .reduce((a, b) => a + b, 0);
  state.total = state.data
    .map((i) => i.productQuantity * i.productPrice)
    .reduce((a, b) => a + b, 0);
};

export const removeProductFromCart = (
  state: cartStateType,
  payload: string
) => {
  state.data = state.data.filter((product) => product.productId !== payload);
  state.count = state.data
    .map((i) => i.productQuantity)
    .reduce((a, b) => a + b, 0);
  state.total = state.data
    .map((i) => i.productQuantity * i.productPrice)
    .reduce((a, b) => a + b, 0);
};

export const clearCart = (state: cartStateType) => {
  state.data = [];
  state.total = 0;
  state.count = 0;
};
