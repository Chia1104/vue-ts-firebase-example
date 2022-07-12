<script setup lang="ts">
import { z } from 'zod'
import { ref, reactive, computed } from "vue";
import { useStore } from 'vuex';
import { useRouter } from "vue-router";
import LoadingSpinner from "@chia/components/globals/LoadingSpinner.vue";
import { message as antMessage } from 'ant-design-vue';

const store = useStore();
const router = useRouter();

const registerSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
  c_password: z.string().min(1),
})
type RegisterData = z.infer<typeof registerSchema>
const emailModel = ref("")
const passwordModel = ref("")
const c_passwordModel = ref("")
const form = ref<HTMLFormElement | undefined>(undefined)
const auth = computed(() => store.state.auth)

const localState = reactive({
  disabled: true,
})

const validate = () => {
  localState.disabled = !registerSchema.safeParse({email: emailModel.value, password: passwordModel.value, c_password: c_passwordModel.value}).success
}

const handleRegister = () => {
  store.dispatch('registerAction', {email: emailModel.value, password: passwordModel.value, c_password: c_passwordModel.value}).then(() => {
    if(auth.value.isAuthenticated) antMessage.success({
      content: 'Register success',
    }).then(() => router.push("/"))
    else antMessage.error({
      content: auth.value.error,
    })
  })
}

</script>

<template>
  <form
      class="w-full c-bg-secondary mx-auto max-w-lg px-10 flex flex-col items-center justify-center rounded-2xl py-14 shadow-2xl overflow-hidden"
      @submit.prevent="handleRegister"
      @change="validate"
      ref="form"
      id="login-form">
    <LoadingSpinner v-if="auth.isLoading"/>
    <label class="text-lg font-bold self-start" for="login-email">Email</label>
    <input
        placeholder="Your email"
        type="email"
        name="email"
        class="w-full p-3 border border-gray-300 rounded-lg my-5"
        id="login-email"
        required
        v-model="emailModel" />
    <label class="text-lg font-bold self-start" for="login-password">Password</label>
    <input
        placeholder="Your password"
        type="password"
        name="password"
        class="w-full p-3 border border-gray-300 rounded-lg my-5"
        id="login-password"
        required
        v-model="passwordModel" />
    <label class="text-lg font-bold self-start" for="login-cpassword">Confirm Password</label>
    <input
        placeholder="Your password"
        type="password"
        name="c_password"
        class="w-full p-3 border border-gray-300 rounded-lg my-5"
        id="login-cpassword"
        required
        v-model="c_passwordModel" />
    <div class="w-full flex gap-5 justify-center items-center">
      <button
          type="submit"
          class="group relative inline-flex transition ease-in-out rounded mt-7 self-center"
          :class="!localState.disabled && 'hover:bg-secondary hover:dark:bg-primary'"
          :disabled="localState.disabled">
      <span class="c-button-secondary transform text-base" :class="!localState.disabled ? 'group-hover:-translate-x-1 group-hover:-translate-y-1' : 'text-gray-300'">
         Register
      </span>
      </button>
      <button
          @click="router.push('/login')"
          class="group relative inline-flex transition ease-in-out rounded mt-7 self-center hover:bg-secondary hover:dark:bg-primary">
        <span class="c-button-secondary transform text-base group-hover:-translate-x-1 group-hover:-translate-y-1">
           Login
        </span>
      </button>
    </div>
  </form>
</template>
