<script setup lang="ts">
import { z } from 'zod'
import { ref } from "vue";
import { message as antMessage } from 'ant-design-vue';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})
type FormData = z.infer<typeof formSchema>
const nameModel = ref("")
const emailModel = ref("")
const messageModel = ref("")
const form = ref<HTMLFormElement | null>(null)
const reCaptcha = ref(import.meta.env.VITE_RE_CAPTCHA_KEY)

const handleSubmit = async () => {
  const key = 'updatable';
  antMessage.loading({
    content: 'Sending message...',
    key,
  });
  // @ts-ignore
  const FORMSPREE_KEY = import.meta.env.VITE_FORMSPREE_KEY
  const name = nameModel.value
  const email = emailModel.value
  const message = messageModel.value
  const isValid = formSchema.safeParse({ name, email, message });

  if(!isValid.success) {
    antMessage.error({
      content: 'Invalid form data',
      key,
    });
    return;
  }

  const response = await fetch(`https://formspree.io/f/${FORMSPREE_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  })
  if(response.ok) antMessage.success({
    content: 'We have received your message!',
    key,
  })
  else antMessage.error({
    content: 'Something went wrong',
    key,
  })
}

</script>

<template>
  <form
      class="w-full max-w-lg"
      @submit.prevent="handleSubmit"
      ref="form"
  >
    <input
        placeholder="Your name"
        type="text"
        class="w-full p-3 border border-gray-300 rounded-lg my-5"
        id="name"
        v-model="nameModel" />
    <input
        placeholder="Your email"
        type="email"
        class="w-full p-3 border border-gray-300 rounded-lg my-5"
        id="email"
        v-model="emailModel" />
    <textarea
        placeholder="Your message"
        class="w-full p-3 border border-gray-300 rounded-lg my-5 min-h-[130px]"
        id="message"
        v-model="messageModel" />
<!--    <component is="script" src="https://www.google.com/recaptcha/api.js" async defer/>-->
<!--    <div :data-sitekey="reCaptcha" class="g-recaptcha self-center"/>-->
    <button type="submit" class="group hover:bg-secondary hover:dark:bg-primary relative inline-flex transition ease-in-out rounded mt-7 self-center bg-gray-500">
      <span class="c-button-secondary transform group-hover:-translate-x-1 group-hover:-translate-y-1 text-base after:content-['_↗']">
         Send
      </span>
    </button>
  </form>
</template>
