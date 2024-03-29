import type { Cart } from "@chia/shared/types/cart";

export type cartStateType = {
  data: Cart[];
  total: number;
  count: number;
};

export const cartInitState = {
  data: [],
  total: 0,
  count: 0,
};
