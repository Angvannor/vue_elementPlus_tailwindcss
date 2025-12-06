<template>
  <div class="w-full h-full">
    <div class="pl-10 h-[10%] flex items-center">
      <el-button type="danger" @click="confirmAdd = true">添加类别</el-button>
    </div>
    <el-divider direction="horizontal" content-position="center"></el-divider>
    <div class="w-full p-10">
      <el-table :data="categories" style="width: 100%">
        <el-table-column label="名称" prop="name" width="540"></el-table-column>
        <el-table-column label="简介" prop="description" width="1080"> </el-table-column>
        <el-table-column label="博客数" prop="count"> </el-table-column>
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row }">
            <el-button type="danger" size="small" @click="handleDelete(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="w-1/3 h-1/2 rounded-2xl bg-gray-50 m-auto z-10" v-if="confirmAdd">
      <div class="w-full h-1/6 flex justify-end pr-6 pt-6">
        <el-button circle @click="confirmAdd = false">X</el-button>
      </div>
      <div class="w-full h-5/6 flex flex-col items-center">
        <div class="w-4/5 h-1/6">
          <el-input placeholder="类别名称" v-model="categoryName" class="w-full!"></el-input>
        </div>
        <div class="w-4/5 h-1/2 mt-4">
          <el-input
            type="textarea"
            placeholder="类别简介"
            v-model="categoryDescription"
            class="w-full! h-full!"
            :rows="10"
            resize="none"
          ></el-input>
        </div>
        <div class="w-full h-1/3 flex justify-around items-center p-4">
          <div class="w-full flex justify-center">
            <el-button type="primary" @click="handleAdd">确认添加</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "@/stores/counter";
import { ElMessageBox } from "element-plus";

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

const handleDelete = (id) => {
  ElMessageBox.confirm("确定删除该类别吗?", "警告", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    deleteCategory(id);
  });
};
</script>
