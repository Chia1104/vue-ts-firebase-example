<script setup lang="ts">
import { z } from "zod";
import { defineProps, ref, reactive, watchEffect } from "vue";
import { useStore } from "vuex";
import { Popover as AntPopover } from "ant-design-vue";

interface Props {
  email: string;
  name?: string;
  avatar?: string;
}

defineProps<Props>();

const nameSchema = z.string().min(1).max(20);

const store = useStore();
const nameModal = ref("");
const localState = reactive({
  disabled: true,
});
watchEffect(() => {
  localState.disabled = !nameSchema.safeParse(nameModal.value).success;
});

const editName = () =>
  store.dispatch("updateProfileAction", { displayName: nameModal.value });
</script>

<template>
  <div
    class="w-full rounded-xl flex flex-col c-bg-secondary shadow-lg md:w-[75%] lg:w-[65%] group duration-300 transition ease-in-out relative">
    <div
      class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-t-xl bg-gray-200 mb-3 xl:aspect-w-3 xl:aspect-h-1">
      <img
        class="rounded group-hover:scale-[1.05] duration-300 transition ease-in-out object-cover"
        src="../../../../src/assets/profile-1.jpg"
        alt="profile"
        loading="lazy" />
    </div>
    <div
      class="flex flex-col justify-center items-center z-30 absolute w-full top-[13rem]">
      <img
        class="rounded-full h-[150px] w-[150px] md:h-[200px] md:w-[200px] border-8 border-white"
        src="../../../../src/assets/profile-2.jpg"
        alt="profile" />
      <AntPopover placement="bottom">
        <h1 class="pt-7 text-2xl">{{ name || "Edit Name" }}</h1>
        <template #content>
          <form class="w-full flex" @submit.prevent="editName">
            <input
              v-model="nameModal"
              type="text"
              class="w-full border-2 border-gray-300 rounded-lg p-1 mr-2"
              required />
            <button
              type="submit"
              :disabled="localState.disabled"
              class="rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition"
              :class="localState.disabled && 'text-gray-300'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </form>
        </template>
      </AntPopover>
    </div>
    <div class="flex flex-col w-full min-h-[350px] pt-32">
      <p class="mt-auto mb-10 text-start px-7 text-xl line-clamp-1">
        {{ email }}
      </p>
    </div>
  </div>
</template>
