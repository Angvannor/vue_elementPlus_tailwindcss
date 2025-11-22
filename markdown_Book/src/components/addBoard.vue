<template>
  <div class="w-1/3 h-full">
    <div class="h-full shadow-lg bg-white dark:bg-gray-800 p-5">
      <!-- 1. 选中笔记时 (功能保留) -->
      <div v-if="selectedNote" class="h-full flex flex-col">
        <textarea
          :value="selectedNote.title"
          @input="updateNoteTitle(selectedNote.id, $event.target.value)"
          placeholder="请输入标题..."
          class="w-full h-[10%] p-2 resize-none outline-none text-3xl font-mono italic font-bold bg-transparent border-b border-gray-200 dark:border-gray-700"
        ></textarea>
        <textarea
          :value="selectedNote.content"
          @input="updateNoteContent(selectedNote.id, $event.target.value)"
          placeholder="请输入内容..."
          class="w-full h-[90%] p-2 resize-none outline-none text-xl font-mono bg-transparent custom-scrollbar"
        ></textarea>
      </div>

      <!-- 2. 未选中时 (功能保留) -->
      <div v-else class="h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
        <p>请从左侧选择一篇笔记进行编辑</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const noteStore = useNoteStore();
const { selectedNote } = storeToRefs(noteStore);
const { updateNoteTitle, updateNoteContent } = noteStore;
</script>

<style scoped>
/* 确保 textarea 样式简洁并适应暗色模式 */
textarea {
  font-family: monospace;
  line-height: 1.6;
  color: inherit; /* 继承父级颜色 */
}
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
</style>
