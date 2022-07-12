<script setup lang="ts">
import { Drawer as AntDrawer } from "ant-design-vue";
import { defineProps, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

interface Props {
  visible: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
}

defineProps<Props>()

const store = useStore()
const router = useRouter()
const auth = computed(() => store.state.auth)

const logout = () => store.dispatch("logoutAction").then(() => router.push("/login"))

</script>

<template>
  <AntDrawer
      :title="auth.user?.name && `Hello, ${auth.user.name}` || 'Welcome'"
      placement="left"
      :closable="false"
      :visible="visible"
      @close="onClose">
    <div class="w-full flex flex-col gap-2 h-full" v-if="auth.isAuthenticated">
      <router-link
          class="p-1 py-2 rounded-lg hover:bg-[#E6E6FA] transition hover:text-dark flex gap-1"
          to="/profile">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Profile
      </router-link>
      <router-link
          class="p-1 py-2 rounded-lg hover:bg-[#E6E6FA] transition hover:text-dark flex gap-1"
          to="/">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </span>
        Orders
      </router-link>
      <router-link
          class="p-1 py-2 rounded-lg hover:bg-[#E6E6FA] transition hover:text-dark flex gap-1"
          to="/">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Settings
      </router-link>
      <div class="mt-auto">
        <button
            class="py-1 px-2 rounded-lg hover:bg-red-200 transition hover:text-dark flex justify-center items-center"
            @click="logout">
          Logout
          <span class="ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </span>
        </button>
      </div>
    </div>
    <div class="w-full flex flex-col gap-2 h-full" v-else>
      <router-link
          class="p-1 py-2 rounded-lg hover:bg-[#E6E6FA] transition hover:text-dark flex gap-1"
          to="/login">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </span>
        Login
      </router-link>
      <router-link
          class="p-1 py-2 rounded-lg hover:bg-[#E6E6FA] transition hover:text-dark flex gap-1"
          to="/register">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </span>
        Register
      </router-link>
    </div>
  </AntDrawer>
</template>
