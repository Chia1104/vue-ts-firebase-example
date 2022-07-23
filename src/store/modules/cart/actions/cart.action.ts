import type { Product } from "@chia/utils/types/product";
import type { Cart } from "@chia/utils/types/cart";

export const addProductToCartAction = (
  context: any,
  { product, qty }: { product: Product; qty: number }
) => {
  const item = {
    productName: product.name,
    productPrice: product.price,
    productQuantity: qty,
    productId: product.id,
  } as Cart;
  context.commit("addProductToCart", item);
};

export const removeProductFromCartAction = (
  context: any,
  productId: string
) => {
  context.commit("removeProductFromCart", productId);
};

export const clearCartAction = (context: any) => {
  context.commit("clearCart");
};
