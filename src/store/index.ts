import { createStore } from "vuex";
import { productModule } from "@chia/store/modules/products";
import { cartModule } from "@chia/store/modules/cart";
import { authModule } from "@chia/store/modules/auth";

const store = createStore({
  modules: {
    product: productModule,
    cart: cartModule,
    auth: authModule
  }
});

export default store;
