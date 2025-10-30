<script setup>
import { ref, onMounted, watch } from "vue";

import addTodos from "./components/addTodos.vue";
import todoList from "./components/todoList.vue";

const STORAGE_KEY = "isDarkMode";
const isDarkMode = ref(false);

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    isDarkMode.value = saved === "true";
  } else {
    const h = new Date().getHours();
    isDarkMode.value = h < 6 || h > 18;
  }
});

// 唯一的修改点在这里
watch(isDarkMode, (newVal) => {
  // 移除了 .value，因为 STORAGE_KEY 是一个字符串
  localStorage.setItem(STORAGE_KEY, newVal ? "true" : "false");
});
</script>

<template>
  <div
    class="relative h-screen items-center justify-center overflow-hidden transition-colors duration-700"
    :class="isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'"
  >
    <div
      class="absolute inset-0 -z-10 pointer-events-none"
      :class="isDarkMode ? 'bg-night' : 'bg-day'"
      aria-hidden="true"
    ></div>
    <el-button
      type="default"
      plain
      text
      bg
      class="p-5! m-5! relative right-5 top-5 text-xl! font-bold!"
      @click="isDarkMode = !isDarkMode"
      >{{ isDarkMode ? "切换到日间模式 ☀️" : "切换到夜间模式 🌙" }}
    </el-button>
    <h1 class="text-center font-bold text-5xl text-shadow-lg m-25">Todo List</h1>
    <div
      class="text-center shadow-xl p-10 rounded-xl w-1/2 h-1/2 mx-auto flex justify-between"
      :class="isDarkMode ? 'bg-gray-700' : 'bg-white'"
    >
      <addTodos />
      <div class="shadow-lg ml-5 w-2/3 h-full rounded-xl p-5">
        <todoList />
        <div class="p-2">
          <el-button type="primary" class="w-1/5 m-3 h-10">已完成</el-button>
          <el-button type="primary" class="w-1/5 m-3 h-10">已完成</el-button>
          <el-button type="primary" class="w-1/5 m-3 h-10">已完成</el-button>
          <el-button type="primary" class="w-1/5 m-3 h-10">已完成</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-day {
  background: linear-gradient(270deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e);
  background-size: 800% 800%;
  animation: bgMove 15s ease infinite;
}

.bg-night {
  background: linear-gradient(270deg, #a18cd1, #fbc2eb, #fbc2eb, #a18cd1);
  background-size: 800% 800%;
  animation: bgMove 15s ease infinite;
}

@keyframes bgMove {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 100% 50%;
  }
}
</style>
