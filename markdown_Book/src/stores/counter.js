import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

// 建议将 store 命名为 'note' 而不是 'counter'
export const useNoteStore = defineStore("note", () => {
  // --- 状态 (State) ---

  // 从 localStorage 加载笔记，如果不存在则使用欢迎笔记
  const notes = ref(
    JSON.parse(localStorage.getItem("md-notes")) || [
      {
        id: "1",
        title: "欢迎使用",
        content:
          "# 欢迎来到 Markdown Book\n\n- 在左侧添加新笔记\n- 在中间编辑内容\n- 在右侧查看预览",
      },
    ]
  );

  // 从 localStorage 加载最后选中的笔记 ID
  const selectedNoteId = ref(
    localStorage.getItem("md-selected-id") || (notes.value.length > 0 ? notes.value[0].id : null)
  );

  // 从 localStorage 加载主题
  const isDarkMode = ref(JSON.parse(localStorage.getItem("md-dark-mode")) || false);

  // 搜索关键词
  const searchQuery = ref("");

  // --- 计算属性 (Getters) ---

  // 获取当前选中的笔记对象
  const selectedNote = computed(() => {
    return notes.value.find((note) => note.id === selectedNoteId.value) || null;
  });

  // 获取过滤后的笔记列表（用于搜索）
  const filteredNotes = computed(() => {
    if (!searchQuery.value) {
      return notes.value;
    }
    const query = searchQuery.value.toLowerCase();
    return notes.value.filter(
      (note) =>
        note.title.toLowerCase().includes(query) || note.content.toLowerCase().includes(query)
    );
  });

  // --- 操作 (Actions) ---

  const addNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: "新的笔记",
      content: "# 在这里开始写作...",
    };
    notes.value.unshift(newNote); // 加到最前面
    selectedNoteId.value = newNote.id; // 自动选中
  };

  const deleteNote = (id) => {
    notes.value = notes.value.filter((note) => note.id !== id);
    // 如果删除的是当前选中的，则选中第一个
    if (selectedNoteId.value === id) {
      selectedNoteId.value = notes.value.length > 0 ? notes.value[0].id : null;
    }
  };

  const selectNote = (id) => {
    selectedNoteId.value = id;
  };

  const updateNoteTitle = (id, newTitle) => {
    const note = notes.value.find((note) => note.id === id);
    if (note) {
      note.title = newTitle;
    }
  };

  const updateNoteContent = (id, newContent) => {
    const note = notes.value.find((note) => note.id === id);
    if (note) {
      note.content = newContent;
    }
  };

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  // --- 数据持久化 ---

  // 侦听 notes 变化并存入 localStorage
  watch(
    notes,
    (newNotes) => {
      localStorage.setItem("md-notes", JSON.stringify(newNotes));
    },
    { deep: true } // 深度侦听
  );

  // 侦听 selectedNoteId 变化
  watch(selectedNoteId, (newId) => {
    localStorage.setItem("md-selected-id", newId);
  });

  // 侦听 isDarkMode 变化
  watch(isDarkMode, (newMode) => {
    localStorage.setItem("md-dark-mode", JSON.stringify(newMode));
    // 关键：同时更新 <html> 标签的 class
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return {
    notes,
    selectedNoteId,
    isDarkMode,
    searchQuery,
    selectedNote,
    filteredNotes,
    addNote,
    deleteNote,
    selectNote,
    updateNoteTitle,
    updateNoteContent,
    toggleTheme,
  };
});
