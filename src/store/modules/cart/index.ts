import { cartInitState } from "@chia/store/modules/cart/states";
import * as cartMutations from "@chia/store/modules/cart/mutations";
import * as cartActions from "@chia/store/modules/cart/actions";

export const cartModule = {
  state: () => cartInitState,
  mutations: cartMutations,
  actions: cartActions,
};
