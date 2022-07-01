import { createStore } from "vuex";
import { productModule } from "@chia/store/modules/products";

const store = createStore({
  modules: {
    product: productModule
  }
});

export default store;
