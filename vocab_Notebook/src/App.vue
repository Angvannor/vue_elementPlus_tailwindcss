<template>
  <div
    class="h-screen"
    style="
      background-color: #f3f4f6;
      background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
      background-size: 24px 24px;
    "
  >
    <div class="h-1/8"></div>
    <h1 class="text-center text-4xl font-bold">Vocab Notebook</h1>
    <div class="m-auto w-1/2 h-2/3 flex">
      <main_board />
      <word_board />
      <add_board />
    </div>
  </div>
</template>

<script setup>
import main_board from "./components/main_board.vue";
import word_board from "./components/word_board.vue";
import add_board from "./components/add_board.vue";
import { useVocabStore } from "@/stores/vocabStore";

const STORAGE_KEY = "my-vocab-app-data";

const vocabStore = useVocabStore();

vocabStore.$subscribe((mutation, state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.vocabs));
});
</script>
