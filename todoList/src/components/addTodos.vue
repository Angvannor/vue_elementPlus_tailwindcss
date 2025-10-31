<template>
  <div class="shadow-lg h-full rounded-xl p-5">
    <h1 class="mb-5">Add Todo</h1>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="事件名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="事件类别">
        <el-radio-group v-model="form.resource">
          <el-radio value="事业">事业</el-radio>
          <el-radio value="兴趣">兴趣</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="事件内容">
        <el-input v-model="form.desc" type="textarea" maxlength="200" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="m-auto">创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  resource: "",
  date: "",
  desc: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<style scoped>
.el-form :deep(.el-form-item__label) {
  color: inherit;
}

.el-form :deep(.el-textarea__inner) {
  height: 250px !important;
  resize: none !important;
}

:is(.dark) .el-form :deep(.el-input__wrapper),
:is(.dark) .el-form :deep(.el-textarea__inner) {
  background-color: #4b5563;
  box-shadow: 0 0 0 1px #6b7280 inset;
  color: white;
}

:is(.dark) .el-form :deep(.el-radio__label) {
  color: white;
}

:is(.dark) .el-form :deep(.el-radio__input) {
  --el-radio-border-color: #9ca3af;
  --el-radio-input-border-color-hover: var(--el-color-primary);
  --el-radio-input-border-color: #9ca3af;
  --el-radio-input-bg-color: #4b5563;
}
</style>
