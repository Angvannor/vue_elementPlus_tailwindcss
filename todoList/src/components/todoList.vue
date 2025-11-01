<template>
  <div class="shadow-lg w-full h-7/8 rounded-xl p-5">
    <h1 class="mb-5">Todo List</h1>
    <el-table
      :data="filteredTodos"
      :row-class-name="tableRowClassName"
      style="width: 100%"
      class="h-6/7!"
    >
      <el-table-column prop="name" label="名称" min-width="80" />
      <el-table-column prop="resource" label="类别" min-width="60" />
      <el-table-column prop="desc" label="内容" min-width="100" />
      <el-table-column label="操作" min-width="100" fixed="right">
        <template #default="scope">
          <div>
            <el-button
              :type="scope.row.isCompleted ? 'default' : 'success'"
              size="small"
              @click="todoStore.toggleCompletion(scope.row.id)"
              >{{ scope.row.isCompleted ? "取消完成" : "完成" }}</el-button
            >
            <el-button type="danger" size="small" @click="deleteTodo(scope.row.id)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();

const { filteredTodos, todos } = storeToRefs(todoStore);
const { toggleCompletion, deleteTodo, currentFilter } = todoStore;

const tableRowClassName = ({ row, rowIndex }) => {
  if (row.isCompleted) {
    return "completed-row";
  }
  return "";
};
</script>

<style scoped>
:is(.dark) .el-table {
  --el-table-bg-color: #4b5563;
  --el-table-text-color: #ffffff;
  --el-table-header-text-color: #a9abad;
  --el-table-row-hover-bg-color: #374151;
}

:is(.dark) .el-table :deep(.el-table__row) {
  background-color: var(--el-table-bg-color) !important;
}

:is(.dark) .el-table :deep(.el-table__header-wrapper) th {
  background-color: #374151 !important;
  color: var(--el-table-header-text-color) !important;
}

:is(.dark) .el-table :deep(.el-table__header-wrapper) {
  background-color: #374151;
  color: var(--el-table-header-text-color);
}

.el-table :deep(tr.completed-row) {
  text-decoration: line-through;
  color: #9ca3af !important;
  --el-table-row-hover-bg-color: #374151;
}
</style>
