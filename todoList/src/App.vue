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
    :class="isDarkMode ? 'text-white' : 'text-black'"
  >
    <div
      class="absolute h-screen w-screen inset-0 -z-10 pointer-events-none"
      :class="isDarkMode ? 'bg-night' : 'bg-day'"
      aria-hidden="true"
    ></div>
    <el-button
      type="default"
      plain
      text
      bg
      class="p-5! m-5! relative right-5 top-5 text-xl! font-bold!"
      :class="isDarkMode ? 'bg-violet-400! text-white!' : 'bg-blue-100!'"
      @click="isDarkMode = !isDarkMode"
      >{{ isDarkMode ? "切换到日间模式 ☀️" : "切换到夜间模式 🌙" }}
    </el-button>
    <h1 class="text-center font-bold text-5xl text-shadow-lg m-25">Todo List</h1>
    <div
      class="text-center shadow-xl p-10 rounded-xl w-1/2 h-1/2 mx-auto flex justify-between"
      :class="isDarkMode ? 'bg-zinc-800 ' : 'bg-blue-100'"
    >
      <addTodos :class="isDarkMode ? 'bg-zinc-700 ' : 'bg-blue-50'" />
      <div
        class="shadow-lg ml-5 w-2/3 h-full rounded-xl p-5"
        :class="isDarkMode ? 'bg-zinc-700 ' : 'bg-blue-50'"
      >
        <todoList :class="isDarkMode ? 'bg-zinc-600 ' : 'bg-white'" />
        <div class="p-2">
          <el-button type="success" class="w-1/5 m-3 h-10 font-bold!" :plain="isDarkMode"
            >已完成</el-button
          >
          <el-button type="danger" class="w-1/5 m-3 h-10 font-bold!" :plain="isDarkMode"
            >未完成</el-button
          >
          <el-button type="primary" class="w-1/5 m-3 h-10 font-bold!" :plain="isDarkMode"
            >💻技能</el-button
          >
          <el-button type="warning" class="w-1/5 m-3 h-10 font-bold!" :plain="isDarkMode"
            >🎨兴趣</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-day {
  background: linear-gradient(270deg, #66ccff, #aff, #aff, #66ccff);
  background-size: 800% 800%;
}

.bg-day::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transform: rotate(-15deg);
  animation: slide-bg 10s ease-in-out infinite;
  pointer-events: none;
}

.bg-night {
  background: linear-gradient(270deg, #869, #979, #979, #869);
  background-size: 800% 800%;
}

.bg-night::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transform: rotate(-15deg);
  animation: slide-bg 10s ease-in-out infinite;
  pointer-events: none;
}

@keyframes slide-bg {
  0% {
    /* 从右上方开始 */
    transform: rotate(-15deg) translateX(-33%);
  }
  50% {
    /* 缓慢移动到左下方 */
    transform: rotate(-15deg) translateX(-67%);
  }
  100% {
    /* 回到起点 */
    transform: rotate(-15deg) translateX(-33%);
  }
}
</style>
