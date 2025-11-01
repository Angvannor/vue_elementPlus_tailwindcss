<template>
  <div class="shadow-lg w-full h-7/8 rounded-xl p-5">
    <h1 class="mb-5">Todo List</h1>
    <el-table :data="data" border style="width: 100%" class="h-6/7!">
      <el-table-column prop="name" label="名称" min-width="80" />
      <el-table-column prop="region" label="类别" min-width="60" />
      <el-table-column prop="desc" label="内容" min-width="100" />
      <el-table-column label="操作" min-width="100" fixed="right">
        <template #default>
          <el-button type="success" size="small">完成</el-button>
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref([
  {
    name: "学习Vue3",
    region: "事业",
    desc: "学习Vue3的基本用法，包括Composition API、脚手架等。",
  },
  {
    name: "阅读技术书籍",
    region: "兴趣",
    desc: "阅读《JavaScript高级程序设计》和《你不知道的JavaScript》系列。",
  },
  {
    name: "锻炼身体",
    region: "兴趣",
    desc: "每天跑步30分钟，保持身体健康。",
  },
  {
    name: "学习Vue3",
    region: "事业",
    desc: "学习Vue3的基本用法，包括Composition API、脚手架等。",
  },
  {
    name: "阅读技术书籍",
    region: "兴趣",
    desc: "阅读《JavaScript高级程序设计》和《你不知道的JavaScript》系列。",
  },
  {
    name: "锻炼身体",
    region: "兴趣",
    desc: "每天跑步30分钟，保持身体健康。",
  },
  {
    name: "学习Vue3",
    region: "事业",
    desc: "学习Vue3的基本用法，包括Composition API、脚手架等。",
  },
  {
    name: "阅读技术书籍",
    region: "兴趣",
    desc: "阅读《JavaScript高级程序设计》和《你不知道的JavaScript》系列。",
  },
  {
    name: "锻炼身体",
    region: "兴趣",
    desc: "每天跑步30分钟，保持身体健康。",
  },
  {
    name: "学习Vue3",
    region: "事业",
    desc: "学习Vue3的基本用法，包括Composition API、脚手架等。",
  },
  {
    name: "阅读技术书籍",
    region: "兴趣",
    desc: "阅读《JavaScript高级程序设计》和《你不知道的JavaScript》系列。",
  },
  {
    name: "锻炼身体",
    region: "兴趣",
    desc: "每天跑步30分钟，保持身体健康。",
  },
]);
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
</style>
