import { shoppingCartInitState } from "@chia/store/modules/shoppingCart/states";
import * as shoppingCartMutations from "@chia/store/modules/shoppingCart/mutations";
import * as shoppingCartActions from "@chia/store/modules/shoppingCart/actions";

export const shoppingCartModule = {
    state: () => shoppingCartInitState,
    mutations: shoppingCartMutations,
    actions: shoppingCartActions
}
