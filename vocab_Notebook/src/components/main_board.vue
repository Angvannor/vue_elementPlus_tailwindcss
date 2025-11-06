<template>
  <div class="w-1/3 h-2/3 bg-zinc-50 rounded-3xl m-auto shadow-md p-5 mr-10">
    <div class="mb-10 m-auto w-4/5 inset-shadow-gray-50 shadow-md">
      <el-input
        placeholder="search word..."
        v-model="search_word"
        :prefix-icon="Search"
        class="h-10!"
        clearable
      ></el-input>
    </div>

    <div
      v-for="vocab in listToDisplay"
      :key="vocab.id"
      class="w-4/5 h-11/40 bg-neutral-100 rounded-2xl shadow-md m-auto p-2 mb-5"
    >
      <div class="flex items-baseline m-2">
        <h1 class="text-3xl font-bold font-mono italic">{{ vocab.name }}</h1>
        <p class="text-xl text-gray-600 font-serif ml-2 italic">
          {{ vocab.nature + "." }}
        </p>
        <p class="text-2xs text-gray-600 font-sans italic font-bold">
          {{ vocab.interpretation }}
        </p>
      </div>
      <div class="m-auto shadow-md p-2 bg-gray-50 rounded-2xl">
        <h1 class="font-serif font-bold">Example</h1>
        <p class="font-mono font-bold m-2">{{ vocab.example }}</p>
      </div>
    </div>

    <div v-if="vocabs.length === 0" class="text-center text-gray-500 p-5">
      单词本是空的，快去添加吧！
    </div>

    <div
      v-if="vocabs.length > 0 && listToDisplay.length === 0 && search_word.trim() !== ''"
      class="text-center text-gray-500 p-5"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Search } from "@element-plus/icons-vue";

import { storeToRefs } from "pinia";
import { useVocabStore } from "@/stores/vocabStore";

const vocabStore = useVocabStore();
const { vocabs } = storeToRefs(vocabStore);

const search_word = ref("");

const listToDisplay = computed(() => {
  const search = search_word.value.trim().toLowerCase();

  if (search === "") {
    const sourceVocabs = [...vocabs.value];

    if (sourceVocabs.length <= 3) {
      return sourceVocabs.sort(() => 0.5 - Math.random());
    }

    const shuffled = sourceVocabs;
    let i = shuffled.length;
    while (i > 0) {
      const j = Math.floor(Math.random() * i);
      i--;
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 3);
  }

  return vocabs.value.filter((vocab) => {
    return vocab.name.toLowerCase().includes(search);
  });
});
</script>
