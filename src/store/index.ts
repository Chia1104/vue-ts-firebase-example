import { createStore } from "vuex";
import { productModule } from "@chia/store/modules/products";
import { cartModule } from "@chia/store/modules/cart";
import { authModule } from "@chia/store/modules/auth";
import { imageModule } from "@chia/store/modules/Image";
import { dataModule } from "@chia/store/modules/data";

const store = createStore({
  modules: {
    product: productModule,
    cart: cartModule,
    auth: authModule,
    image: imageModule,
    data: dataModule,
  },
});

export default store;
