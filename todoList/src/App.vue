<script setup>
import { ref } from "vue";

import addTodos from "./components/addTodos.vue";
import todoList from "./components/todoList.vue";
</script>

<template>
  <div class="h-screen">
    <h1 class="text-center font-bold text-5xl text-shadow-lg m-25">Todo List</h1>
    <div
      class="text-center shadow-xl p-10 rounded-xl bg-white w-1/2 h-1/2 mx-auto flex justify-between"
    >
      <addTodos />
      <div class="shadow-lg ml-5 w-2/3 h-full rounded-xl p-5">
        <todoList />
        <div class="p-2">
          <button class="bg-blue-500 text-white rounded-lg w-1/5 m-3 h-10">已完成</button>
          <button class="bg-blue-500 text-white rounded-lg w-1/5 m-3 h-10">已完成</button>
          <button class="bg-blue-500 text-white rounded-lg w-1/5 m-3 h-10">已完成</button>
          <button class="bg-blue-500 text-white rounded-lg w-1/5 m-3 h-10">已完成</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
