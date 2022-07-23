import { DataState } from "@chia/store/modules/data/state";

export const categorySelected = (state: DataState, payload: boolean) => {
  state.categorySelected = payload;
};

export const productCategory = (state: DataState, payload: string) => {
  state.productCategory = payload;
};
