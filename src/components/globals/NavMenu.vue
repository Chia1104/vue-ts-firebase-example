<script setup lang="ts">
import { Drawer as AntDrawer, Popover as AntPopover } from "ant-design-vue";
import { ref, computed } from "vue";
import ShoppingIcon from "@chia/components/globals/ShoppingIcon.vue";
import { useStore } from 'vuex';

const visible = ref(false);
const store = useStore();
const shoppingCart = computed(() => store.state.shoppingCart);

const activeDrawer = () => {
  visible.value = !visible.value;
};

</script>

<template>
  <nav class="w-screen flex h-[75px] items-center top-0 fixed justify-center z-50 border-b-[1px] c-border-primary c-bg-secondary">
    <div class="flex container w-[100%]">
      <div class="flex items-center w-[70%] justify-start">
        <router-link to="/" class="subtitle ml-3 hover:c-text-green-to-purple transition ease-in-out">
          VueShop
        </router-link>
      </div>
      <div class="flex items-center w-[30%] justify-end mr-3">
        <button
            @click="activeDrawer"
            class="flex c-link mr-4 py-3 text-dark"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
        <ShoppingIcon
            :products="shoppingCart.products"
            :count="shoppingCart.count"
            :total="shoppingCart.total"
        />
      </div>
    </div>
  </nav>
  <AntDrawer
    :title="'Hello, 俞又嘉'"
    placement="left"
    :closable="false"
    :visible="visible"
    @close="activeDrawer"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </AntDrawer>
</template>
