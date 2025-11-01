import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [
      {
        id: 1,
        name: "学习Vue3",
        resource: "事业",
        desc: "学习Vue3的基本用法，包括Composition API、脚手架等。",
        isCompleted: false,
      },
    ],
    currentFilter: "all",
  }),
  getters: {
    filteredTodos() {
      if (this.currentFilter === "all") {
        return this.todos;
      }

      if (this.currentFilter === "completed") {
        return this.todos.filter((t) => t.isCompleted === true);
      }

      if (this.currentFilter === "uncompleted") {
        return this.todos.filter((t) => t.isCompleted === false);
      }

      return this.todos.filter((t) => t.resource === this.currentFilter);
    },
  },
  actions: {
    addTodo(newTodo) {
      this.todos.push({
        id: Date.now(),
        name: newTodo.name,
        resource: newTodo.resource,
        desc: newTodo.desc,
        isCompleted: false,
      });
    },
    toggleCompletion(todoId) {
      const todo = this.todos.find((t) => t.id === todoId);

      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
    setFilter(filter) {
      this.currentFilter = filter;
    },
  },
});
