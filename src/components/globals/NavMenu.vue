<script setup lang="ts">
import Drawer from "@chia/components/globals/Drawer.vue";
import { ref, computed } from "vue";
import CartIcon from "@chia/components/globals/Cart/CartIcon.vue";
import { useStore } from "vuex";

const visible = ref(false);
const store = useStore();
const cart = computed(() => store.state.cart);

const activeDrawer = () => {
  visible.value = !visible.value;
};
</script>

<template>
  <nav
    class="w-screen flex h-[75px] items-center top-0 fixed justify-center z-50 border-b-[1px] c-border-primary c-bg-secondary">
    <div class="flex container w-[100%]">
      <div class="flex items-center w-[70%] justify-start">
        <router-link
          v-once
          to="/"
          class="subtitle ml-3 hover:c-text-green-to-purple transition ease-in-out">
          VueShop
        </router-link>
      </div>
      <div class="flex items-center w-[30%] justify-end mr-3">
        <button class="flex c-link mr-4 py-3 text-dark" @click="activeDrawer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
        <CartIcon
          :products="cart.data"
          :count="cart.count"
          :total="cart.total" />
      </div>
    </div>
  </nav>
  <Drawer
    :visible="visible"
    :on-close="activeDrawer"
    :is-authenticated="true" />
</template>
