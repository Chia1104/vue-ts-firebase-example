import type { productStateType } from "@chia/store/modules/products/states";
import type { Product } from "@chia/shared/types/product";

export const beginGetProducts = (state: productStateType) => {
  state.products.isLoading = true;
};

export const successGetProducts = (
  state: productStateType,
  payload: Product[]
) => {
  state.products.isLoading = false;
  state.products.isSuccess = true;
  state.products.isError = false;
  state.products.error = null;
  state.products.data = payload;
};

export const failGetProducts = (state: productStateType, payload: string) => {
  state.products.isSuccess = false;
  state.products.isLoading = false;
  state.products.isError = true;
  state.products.error = payload;
  state.products.hasMore = false;
};

export const hasMoreProducts = (state: productStateType, payload: boolean) => {
  state.products.hasMore = payload;
};

export const beginGetMoreProducts = (state: productStateType) => {
  state.products.isLoading = true;
};

export const successGetMoreProducts = (
  state: productStateType,
  payload: Product[]
) => {
  state.products.isLoading = false;
  state.products.isSuccess = true;
  state.products.isError = false;
  state.products.error = null;
  state.products.data = [...state.products.data, ...payload];
};

export const failGetMoreProducts = (
  state: productStateType,
  payload: string
) => {
  state.products.isSuccess = false;
  state.products.isLoading = false;
  state.products.isError = true;
  state.products.error = payload;
};

export const beginGetProduct = (state: productStateType) => {
  state.product.isLoading = true;
};

export const successGetProduct = (
  state: productStateType,
  payload: Product
) => {
  state.product.isLoading = false;
  state.product.isSuccess = true;
  state.product.isError = false;
  state.product.error = null;
  state.product.data = payload;
};

export const failGetProduct = (state: productStateType, payload: string) => {
  state.product.isSuccess = false;
  state.product.isLoading = false;
  state.product.isError = true;
  state.product.error = payload;
};

export const beginGetCategoryProducts = (state: productStateType) => {
  state.categoryProducts.isLoading = true;
};

export const successGetCategoryProducts = (
  state: productStateType,
  payload: Product[]
) => {
  state.categoryProducts.isLoading = false;
  state.categoryProducts.isSuccess = true;
  state.categoryProducts.isError = false;
  state.categoryProducts.error = null;
  state.categoryProducts.data = payload;
};

export const failGetCategoryProducts = (
  state: productStateType,
  payload: string
) => {
  state.categoryProducts.isSuccess = false;
  state.categoryProducts.isLoading = false;
  state.categoryProducts.isError = true;
  state.categoryProducts.error = payload;
};

export const hasMoreCategoryProducts = (
  state: productStateType,
  payload: boolean
) => {
  state.categoryProducts.hasMore = payload;
};

export const beginGetMoreCategoryProducts = (state: productStateType) => {
  state.categoryProducts.isLoading = true;
};

export const successGetMoreCategoryProducts = (
  state: productStateType,
  payload: Product[]
) => {
  state.categoryProducts.isLoading = false;
  state.categoryProducts.isSuccess = true;
  state.categoryProducts.isError = false;
  state.categoryProducts.error = null;
  state.categoryProducts.data = [...state.categoryProducts.data, ...payload];
};

export const failGetMoreCategoryProducts = (
  state: productStateType,
  payload: string
) => {
  state.categoryProducts.isSuccess = false;
  state.categoryProducts.isLoading = false;
  state.categoryProducts.isError = true;
  state.categoryProducts.error = payload;
};

export const resetProducts = (state: productStateType) => {
  state.products.isSuccess = false;
  state.products.isLoading = false;
  state.products.isError = false;
  state.products.error = null;
  state.products.data = [];
  state.products.hasMore = true;
};

export const resetCategoryProduct = (state: productStateType) => {
  state.categoryProducts.isSuccess = false;
  state.categoryProducts.isLoading = false;
  state.categoryProducts.isError = false;
  state.categoryProducts.error = null;
  state.categoryProducts.data = [];
  state.categoryProducts.hasMore = true;
};
