<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useNoteStore } from "@/stores/counter"; // 确保路径正确

// 导入了您原先缺少的 Moon 图标
import { Edit, Sunny, Moon, Search } from "@element-plus/icons-vue";

import Notes from "./components/notes.vue";
import AddBoard from "./components/addBoard.vue";
import NoteContent from "./components/noteContent.vue";

const noteStore = useNoteStore();

// 从 store 中获取状态和 actions
const { searchQuery, isDarkMode } = storeToRefs(noteStore);
const { addNote, toggleTheme } = noteStore;

// 在组件挂载时，立即根据 store 状态设置暗色模式
onMounted(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>

<template>
  <!-- 
    使用暗色模式时, 推荐将 'dark' class 放在根 <html> 元素上
    (已在 store 中实现)
    这里的 'dark:bg-gray-900' 会自动生效 
  -->
  <div
    class="h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
  >
    <!-- 1. 标题 (h-1/6) -->
    <div class="h-1/6 m-auto flex">
      <h1 class="text-4xl text-center font-bold m-auto">Markdown Book</h1>
    </div>

    <!-- 2. 主内容区 (w-3/4 h-2/3) -->
    <div class="w-3/4 h-2/3 m-auto flex">
      <!-- 2.1 左侧面板  -->
      <div class="w-1/3 h-full">
        <!-- 外部容器 (bg-gray-50) -->
        <div class="h-full shadow-lg rounded-l-2xl m-auto p-5 bg-white dark:bg-gray-800">
          <!-- 内部卡片1: 标题和切换 (bg-gray-100) -->
          <div
            class="w-full h-1/8 shadow-lg rounded-2xl flex p-3 items-center bg-gray-50 dark:bg-gray-700"
          >
            <div class="w-2/3 m-auto">
              <h1 class="text-3xl m-auto font-bold">Notes</h1>
            </div>
            <div class="m-auto">
              <!-- 绑定 store 的 isDarkMode 和 toggleTheme -->
              <el-button @click="toggleTheme" class="m-auto" v-if="isDarkMode" plain>
                <el-icon><Sunny /></el-icon>
              </el-button>
              <el-button @click="toggleTheme" class="m-auto" v-else plain>
                <el-icon><Moon /></el-icon>
              </el-button>
            </div>
          </div>

          <!-- 内部卡片2: 笔记列表 (bg-gray-100) -->
          <div class="w-full h-5/7 shadow-xl rounded-2xl bg-gray-50 dark:bg-gray-700 mt-5 mb-5">
            <!-- Notes 组件会填充这个容器 -->
            <notes />
          </div>

          <!-- 内部卡片3: 搜索和添加 (bg-gray-100) -->
          <div
            class="w-full h-1/8 shadow-lg rounded-2xl flex p-3 items-center bg-gray-50 dark:bg-gray-700"
          >
            <div class="w-3/4 m-auto">
              <!-- 绑定 store 的 searchQuery -->
              <el-input
                placeholder="Search"
                v-model="searchQuery"
                class="w-full! h-10"
                :prefix-icon="Search"
                clearable
              ></el-input>
            </div>
            <div class="m-auto pl-2">
              <!-- 绑定 store 的 addNote -->
              <el-button
                type="primary"
                @click="addNote"
                :icon="Edit"
                circle
                class="w-[50px]! h-[50px]! text-3xl!"
              ></el-button>
            </div>
          </div>
        </div>
      </div>

      <!-- 2.2 和 2.3: 编辑器和预览区 -->
      <addBoard />
      <noteContent />
    </div>
  </div>
</template>

<style>
/* 添加一些全局样式修复 Element Plus 在暗色模式下的 UI
  (注意：没有 'scoped')
*/
html.dark .el-input__wrapper {
  background-color: #374151; /* gray-700 */
  box-shadow: 0 0 0 1px #4a5568 inset; /* gray-600 */
}
html.dark .el-input__inner {
  color: #e2e8f0; /* gray-200 */
}
html.dark .el-button.is-plain {
  background-color: #374151;
  border-color: #4a5568;
  color: #e2e8f0;
}
html.dark .el-button.is-plain:hover,
html.dark .el-button.is-plain:focus {
  background-color: #4a5568;
  color: #e2e8f0;
}
/* 修复暗色模式下卡片背景 */
html.dark .bg-white {
  background-color: #1f2937; /* gray-800 */
}
html.dark .bg-gray-50 {
  background-color: #374151; /* gray-700 */
}

html.dark .bg-gray-100 {
  background-color: #4a5568;
}

html.dark .text-gray-900 {
  color: white;
}
</style>
