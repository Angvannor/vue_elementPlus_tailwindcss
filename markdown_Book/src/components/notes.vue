<template>
  <!-- 
    恢复 p-3 
    添加 overflow-y-auto 以便在 h-5/7 的容器内滚动
  -->
  <div class="w-full h-full p-3 overflow-y-auto custom-scrollbar">
    <!-- 1. 空状态 (功能保留) -->
    <div
      v-if="filteredNotes.length === 0"
      class="text-center text-gray-400 dark:text-gray-500 pt-10"
    >
      <h1 class="text-xl font-bold" v-if="notes.length === 0">现在还没有笔记哦~~</h1>
      <h1 class="text-xl font-bold" v-else>未找到匹配的笔记</h1>
    </div>

    <!-- 2. 笔记列表 (功能保留) -->
    <div class="w-full rounded-2xl" v-else>
      <div
        v-for="note in filteredNotes"
        :key="note.id"
        @click="selectNote(note.id)"
        class="w-full p-4 mb-2 rounded-lg cursor-pointer transition-colors duration-150"
        :class="{
          'active-note': note.id === selectedNoteId,
          'hover:bg-gray-100 dark:hover:bg-gray-600': note.id !== selectedNoteId,
        }"
      >
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-semibold truncate">
            {{ note.title || "无标题笔记" }}
          </h1>
          <el-button
            type="danger"
            :icon="Delete"
            @click.stop="deleteNote(note.id)"
            circle
            size="small"
          ></el-button>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">
          {{ note.content.substring(0, 50).replace(/(\r\n|\n|\r)/gm, " ") }}...
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { Delete } from "@element-plus/icons-vue";

const noteStore = useNoteStore();
const { filteredNotes, selectedNoteId, notes } = storeToRefs(noteStore);
const { selectNote, deleteNote } = noteStore;
</script>

<style scoped>
/* 激活笔记的样式 */
.active-note {
  background-color: #dbeafe; /* blue-100 */
}
html.dark .active-note {
  background-color: #2563eb; /* blue-600 */
}

/* 自定义滚动条 */
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
