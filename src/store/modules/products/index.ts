import {productInitState} from "@chia/store/modules/products/states";
import * as productMutations from "@chia/store/modules/products/mutations";
import * as productActions from "@chia/store/modules/products/actions";

export const productModule = {
    state: () => productInitState,
    mutations: productMutations,
    actions: productActions
}
