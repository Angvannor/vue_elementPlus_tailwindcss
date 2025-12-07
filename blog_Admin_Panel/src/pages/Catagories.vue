<template>
  <div class="h-full w-full p-6 bg-gray-50">
    <div class="bg-white p-4 rounded-lg shadow-sm h-full flex flex-col">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold text-gray-700">文章分类管理</h2>
        <el-button type="primary" @click="confirmAdd = true">
          <el-icon class="mr-1"><Plus /></el-icon>添加新类别
        </el-button>
      </div>

      <el-table :data="categories" style="width: 100%" class="flex-grow" height="100%">
        <el-table-column label="名称" prop="name" width="200">
          <template #default="{ row }">
            <el-tag effect="dark">{{ row.name }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="简介" prop="description" show-overflow-tooltip></el-table-column>
        <el-table-column label="关联文章数" prop="count" width="120" align="center">
          <template #default="{ row }">
            <el-badge :value="row.count" class="item" type="primary" />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template #default="{ row }">
            <el-button type="danger" size="small" icon="Delete" @click="handleDelete(row.name)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="添加新类别" v-model="confirmAdd" width="30%">
      <el-form label-width="80px">
        <el-form-item label="类别名称">
          <el-input v-model="categoryName" placeholder="例如：前端开发" />
        </el-form-item>
        <el-form-item label="类别简介">
          <el-input
            type="textarea"
            v-model="categoryDescription"
            placeholder="请输入该类别的描述信息"
            :rows="4"
            resize="none"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="confirmAdd = false">取消</el-button>
          <el-button type="primary" @click="handleAdd">确认添加</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "@/stores/counter";
import { ElMessageBox, ElMessage } from "element-plus";
import { Plus, Delete } from "@element-plus/icons-vue"; // 引入图标

const categoryStore = useCategoryStore();
const { categories } = storeToRefs(categoryStore);
const { addCategory, deleteCategory } = categoryStore;

const categoryName = ref("");
const categoryDescription = ref("");
const confirmAdd = ref(false);

const handleAdd = () => {
  if (!categoryName.value) {
    ElMessage({ message: "类别名称不能为空", type: "error" });
    return;
  }
  const success = addCategory(categoryName.value, categoryDescription.value);
  if (success) {
    categoryName.value = "";
    categoryDescription.value = "";
    confirmAdd.value = false;
  }
};

const handleDelete = (name) => {
  // 注意：这里传的是 name 而不是 id，修复了之前的 bug
  ElMessageBox.confirm(`确定删除类别 "${name}" 吗?`, "警告", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    deleteCategory(name);
  });
};
</script>
