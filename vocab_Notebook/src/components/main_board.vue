<template>
  <div class="w-1/3 h-2/3 bg-zinc-50 rounded-3xl m-auto shadow-md p-5 mr-10">
    <div class="mb-10 m-auto w-4/5 inset-shadow-gray-50 shadow-md">
      <el-input
        placeholder="search"
        v-model="search_word"
        :prefix-icon="Search"
        class="h-10!"
      ></el-input>
    </div>
    <div class="w-4/5 h-11/40 bg-neutral-100 rounded-2xl shadow-md m-auto p-2 mb-5">
      <div class="flex items-baseline m-2">
        <h1 class="text-3xl font-bold font-mono italic">{{ vocabs[0].name }}</h1>
        <p class="text-xl text-gray-600 font-serif ml-2 italic">{{ vocabs[0].nature + "." }}</p>
        <p class="text-2xs text-gray-600 font-sans italic font-bold">
          {{ vocabs[0].interpretation }}
        </p>
      </div>
      <div class="m-auto shadow-md p-2 bg-gray-50 rounded-2xl">
        <h1 class="font-serif font-bold">Example</h1>
        <p class="font-mono font-bold m-2">{{ vocabs[0].example }}</p>
      </div>
    </div>
    <div class="w-4/5 h-11/40 bg-neutral-100 rounded-2xl shadow-md m-auto p-2 mb-5">
      <div class="flex items-baseline m-2">
        <h1 class="text-3xl font-bold font-mono italic">{{ vocabs[1].name }}</h1>
        <p class="text-xl text-gray-600 font-serif ml-2 italic">{{ vocabs[1].nature + "." }}</p>
        <p class="text-2xs text-gray-600 font-sans italic font-bold">
          {{ vocabs[1].interpretation }}
        </p>
      </div>
      <div class="m-auto shadow-md p-2 bg-gray-50 rounded-2xl">
        <h1 class="font-serif font-bold">Example</h1>
        <p class="font-mono font-bold m-2">{{ vocabs[1].example }}</p>
      </div>
    </div>
    <div class="w-4/5 h-11/40 bg-neutral-100 rounded-2xl shadow-md m-auto p-2 mb-5">
      <div class="flex items-baseline m-2">
        <h1 class="text-3xl font-bold font-mono italic">{{ vocabs[2].name }}</h1>
        <p class="text-xl text-gray-600 font-serif ml-2 italic">{{ vocabs[2].nature + "." }}</p>
        <p class="text-2xs text-gray-600 font-sans italic font-bold">
          {{ vocabs[2].interpretation }}
        </p>
      </div>
      <div class="m-auto shadow-md p-2 bg-gray-50 rounded-2xl">
        <h1 class="font-serif font-bold">Example</h1>
        <p class="font-mono font-bold m-2">{{ vocabs[2].example }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Search } from "@element-plus/icons-vue";

import { storeToRefs } from "pinia";
import { useVocabStore } from "@/stores/vocabStore";

const vocabStore = useVocabStore();

const { vocabs } = storeToRefs(vocabStore);
</script>
