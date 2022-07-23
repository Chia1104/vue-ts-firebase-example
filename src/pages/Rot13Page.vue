<script setup lang="ts">
import { ref, computed } from "vue";
import { useMutation } from "@vue/apollo-composable";
import { GET_ROTED13_STRING } from "@chia/lib/GraphQL/rot13/mutations";

const rot13_string = ref("");
const roted13_string = ref("");
const { mutate: Rot13, onDone } = useMutation(GET_ROTED13_STRING);

const handleRot13 = () =>
  Rot13({
    arg1: {
      rot13: rot13_string.value,
    },
  });
onDone((result) => {
  console.log(result.data);
  roted13_string.value = result.data.rot13Action.roted13;
});
</script>

<template>
  <div class="c-container">
    <main class="main w-full text-center">
      <h1 class="text-4xl font-bold self-start mb-20">ROT13</h1>
      <input
        type="text"
        name="rot13_text"
        class="w-full p-3 border border-gray-300 rounded-lg my-5"
        id="rot13_text"
        v-model="rot13_string" />
      <button
        @click="handleRot13"
        class="group relative inline-flex transition ease-in-out rounded mt-7 self-center">
        <span
          class="c-button-secondary transform text-base group-hover:-translate-x-1 group-hover:-translate-y-1">
          ROT13
        </span>
      </button>
      <p class="text-lg my-10">{{ roted13_string }}</p>
    </main>
  </div>
</template>
