import { createStore } from "vuex";
import { productModule } from "@chia/store/modules/products";
import { shoppingCartModule } from "@chia/store/modules/shoppingCart";

const store = createStore({
  modules: {
    product: productModule,
    shoppingCart: shoppingCartModule
  }
});

export default store;
