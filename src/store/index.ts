import { createStore } from "vuex";
import { productModule } from "@chia/store/modules/products";
import { cartModule } from "@chia/store/modules/cart";

const store = createStore({
  modules: {
    product: productModule,
    cart: cartModule
  }
});

export default store;
