import { imageInitState } from "@chia/store/modules/Image/states";
import * as imageMutations from "@chia/store/modules/Image/mutations";
import * as imageActions from "@chia/store/modules/Image/actions";

export const imageModule = {
  state: () => imageInitState,
  mutations: imageMutations,
  actions: imageActions,
};
