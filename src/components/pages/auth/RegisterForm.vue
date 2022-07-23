<script setup lang="ts">
import { z } from "zod";
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import LoadingSpinner from "@chia/components/globals/LoadingSpinner.vue";
import { message as antMessage } from "ant-design-vue";

const store = useStore();
const router = useRouter();

const registerSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
  c_password: z.string().min(1),
});

const emailModel = ref("");
const passwordModel = ref("");
const c_passwordModel = ref("");
const auth = computed(() => store.state.auth);

const localState = reactive({
  disabled: true,
});

const validate = () => {
  localState.disabled = !registerSchema.safeParse({
    email: emailModel.value,
    password: passwordModel.value,
    c_password: c_passwordModel.value,
  }).success;
};

const handleRegister = () => {
  store
    .dispatch("registerAction", {
      email: emailModel.value,
      password: passwordModel.value,
      c_password: c_passwordModel.value,
    })
    .then(() => {
      if (auth.value.isAuthenticated) {
        antMessage.success("Register success");
        router.push("/");
      } else antMessage.error(auth.value.error);
    });
};
</script>

<template>
  <form
    class="w-full c-bg-secondary mx-auto max-w-lg px-10 flex flex-col items-center justify-center rounded-2xl py-14 shadow-2xl overflow-hidden"
    @submit.prevent="handleRegister"
    @change="validate"
    id="register-form">
    <LoadingSpinner v-if="auth.isLoading" />
    <label class="text-lg font-bold self-start" for="register-email"
      >Email</label
    >
    <input
      placeholder="Your email"
      type="email"
      name="email"
      class="w-full p-3 border border-gray-300 rounded-lg my-5"
      id="register-email"
      required
      autocomplete="on"
      v-model="emailModel" />
    <label class="text-lg font-bold self-start" for="register-password"
      >Password</label
    >
    <input
      placeholder="Your password"
      type="password"
      name="password"
      class="w-full p-3 border border-gray-300 rounded-lg my-5"
      id="register-password"
      required
      autocomplete="on"
      v-model="passwordModel" />
    <label class="text-lg font-bold self-start" for="register-cpassword"
      >Confirm Password</label
    >
    <input
      placeholder="Your password"
      type="password"
      name="c_password"
      class="w-full p-3 border border-gray-300 rounded-lg my-5"
      id="register-cpassword"
      required
      autocomplete="on"
      v-model="c_passwordModel" />
    <button
      type="submit"
      class="group relative inline-flex transition ease-in-out rounded mt-7 self-center"
      :class="
        !localState.disabled && 'hover:bg-secondary hover:dark:bg-primary'
      "
      :disabled="localState.disabled">
      <span
        class="c-button-secondary transform text-base"
        :class="
          !localState.disabled
            ? 'group-hover:-translate-x-1 group-hover:-translate-y-1'
            : 'text-gray-300'
        ">
        Register
      </span>
    </button>
  </form>
</template>
