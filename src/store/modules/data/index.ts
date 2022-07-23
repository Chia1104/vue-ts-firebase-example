import { dataInitState } from "@chia/store/modules/data/state";
import * as dataMutations from "@chia/store/modules/data/mutations";
import * as dataActions from "@chia/store/modules/data/actions";

export const dataModule = {
  state: () => dataInitState,
  mutations: dataMutations,
  actions: dataActions,
};
