<script setup lang="ts">
import { z } from 'zod'
import { ref } from "vue";
import { message as antMessage } from 'ant-design-vue';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  message: z.string().min(1),
})
type ContactData = z.infer<typeof contactSchema>
const nameModel = ref("")
const emailModel = ref("")
const messageModel = ref("")
const form = ref<HTMLFormElement | undefined>(undefined)
const RE_CAPTCHA_KEY = ref(import.meta.env.VITE_RE_CAPTCHA_KEY)

const serializeBody = (data: FormData | any): FormData | string => {
  if (data instanceof FormData) return data;
  return JSON.stringify(data);
};

const handleSubmit = async () => {
  const key = 'updatable';
  antMessage.loading({
    content: 'Sending message...',
    key,
  });
  const FORMSPREE_KEY = import.meta.env.VITE_FORMSPREE_KEY
  const name = nameModel.value
  const email = emailModel.value
  const message = messageModel.value
  const isValid = contactSchema.safeParse({name, email, message});
  const formData = new FormData(form.value)

  if (!isValid.success) {
    antMessage.error({
      content: 'Invalid form data',
      key,
    });
    return;
  }

  const response = await fetch(`https://formspree.io/f/${FORMSPREE_KEY}`, {
    method: "POST",
    headers: {
      "Accept": "application/json"
    },
    body: serializeBody(formData),
  })
  if (response.ok) antMessage.success({
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
      id="contact-form"
      class="w-full max-w-lg flex flex-col"
      @submit.prevent="handleSubmit"
      ref="form"
  >
    <input
        placeholder="Your name"
        type="text"
        name="name"
        class="w-full p-3 border border-gray-300 rounded-lg my-5"
        id="contact-name"
        required
        v-model="nameModel" />
    <input
        placeholder="Your email"
        type="email"
        name="email"
        class="w-full p-3 border border-gray-300 rounded-lg my-5"
        id="contact-email"
        required
        v-model="emailModel" />
    <textarea
        placeholder="Your message"
        name="message"
        class="w-full p-3 border border-gray-300 rounded-lg my-5 min-h-[130px]"
        id="contact-message"
        required
        v-model="messageModel" />
    <component is="script" src="https://www.google.com/recaptcha/api.js" async defer/>
    <div
        :data-sitekey="RE_CAPTCHA_KEY"
        class="g-recaptcha self-center"/>
    <button type="submit" class="group hover:bg-secondary hover:dark:bg-primary relative inline-flex transition ease-in-out rounded mt-7 self-center">
      <span class="c-button-secondary transform group-hover:-translate-x-1 group-hover:-translate-y-1 text-base after:content-['_↗']">
         Send
      </span>
    </button>
  </form>
</template>
