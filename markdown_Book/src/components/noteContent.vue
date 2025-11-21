<template>
  <!-- 恢复您原先的根元素 -->
  <div class="w-1/3 h-full">
    <!-- 
      恢复您原先的 shadow, bg, rounded
      添加 p-5 和 overflow-y-auto
    -->
    <div
      class="h-full rounded-r-2xl shadow-lg bg-white dark:bg-gray-800 p-5 overflow-y-auto custom-scrollbar"
    >
      <!-- 1. 选中笔记时 (功能保留) -->
      <div v-if="selectedNote">
        <!-- 'prose' 类用于美化 Markdown 输出 -->
        <article v-html="articleContent" class="prose dark:prose-invert max-w-none"></article>
      </div>

      <!-- 2. 未选中时 (功能保留) -->
      <div v-else class="h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
        <p>预览将显示在这里</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { marked } from "marked"; // 确保你已经 npm install marked
import { useNoteStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const noteStore = useNoteStore();
const { selectedNote } = storeToRefs(noteStore);

const articleContent = computed(() => {
  if (selectedNote.value && selectedNote.value.content) {
    return marked(selectedNote.value.content);
  }
  return "";
});
</script>

<style scoped>
/* 滚动条 */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1; /* gray-300 */
  border-radius: 3px;
}
html.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #4b5563; /* gray-600 */
}

/* 使用 :global() 来确保 prose 样式能正确应用 
  (Tailwind 的 prose 类需要访问全局) 
*/
:global(html.dark .prose code) {
  color: #e5e7eb;
}
:global(html.static .prose code) {
  color: #1f2937;
}
:global(html.dark .prose pre) {
  background-color: #1f2937;
}
:global(html.dark .prose blockquote) {
  border-left-color: #4b5563;
  color: #9ca3af;
}
</style>
