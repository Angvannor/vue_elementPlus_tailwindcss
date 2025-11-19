<script setup>
import { ref } from "vue";

import { Edit, Sunny } from "@element-plus/icons-vue";

import notes from "./components/notes.vue";
import addNote from "./components/addNote.vue";

const isDarkMode = ref(false);
</script>

<template>
  <div class="h-screen">
    <addNote />
    <div class="h-1/6 m-auto flex">
      <h1 class="text-4xl text-center font-bold m-auto">Markdown Book</h1>
    </div>
    <div class="w-1/4 h-2/3 shadow-lg rounded-2xl m-auto p-2">
      <div class="w-full h-1/8 shadow-lg rounded-2xl flex">
        <h1 class="text-3xl m-auto font-bold">Notes</h1>
        <el-button type="primary" @click="ToggleMode" class="m-auto" v-if="isDarkMode" plain
          ><el-icon><Sunny /></el-icon>切换白天模式</el-button
        >
        <el-button type="primary" @click="ToggleMode" class="m-auto" v-else
          ><el-icon><Moon /></el-icon>切换黑夜模式</el-button
        >
      </div>
      <div class="w-full h-3/4 shadow-lg rounded-2xl">
        <notes />
      </div>
      <div class="w-full h-1/8 shadow-lg rounded-2xl flex">
        <div class="w-3/4 m-auto">
          <el-input placeholder="Search" v-model="search_value" class="w-[200px]! h-10"></el-input>
        </div>
        <div class="m-auto">
          <el-button
            type="primary"
            @click="add_Note"
            :icon="Edit"
            circle
            class="w-[50px]! h-[50px]! text-3xl!"
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
