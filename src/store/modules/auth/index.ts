import { authInitState } from "@chia/store/modules/auth/states";
import * as authMutations from "@chia/store/modules/auth/mutations";
import * as authActions from "@chia/store/modules/auth/actions";

export const authModule = {
  state: () => authInitState,
  mutations: authMutations,
  actions: authActions,
};
