<template>
  <div class="w-full h-full">
    <div class="w-full h-[10%] flex items-center justify-between px-4">
      <el-button type="danger" @click="confirmAdd = true">添加类别</el-button>
    </div>
    <el-divider :direction="horizontal" :content-position="center"></el-divider>
    <div class="w-full p-10">
      <el-table :data="data">
        <el-table-column label="名称" prop="name" width="720"></el-table-column>
        <el-table-column label="简介" width="1440"> </el-table-column>
        <el-table-column label="博客数"> </el-table-column>
        <el-table-column label="操作" width="360" fixed="right"> </el-table-column>
      </el-table>
    </div>
    <div class="w-1/3 h-1/2 rounded-2xl bg-gray-50 m-auto z-10" v-if="confirmAdd">
      <div class="w-full h-1/6 flex justify-end pr-6 pt-6">
        <el-button
          icon="el-icon-close"
          class="bg-blue-500! text-white! text-center!"
          circle
          @click="confirmAdd = false"
          >X</el-button
        >
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
            <el-button type="primary" @click="addCategory">确认添加</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useCategoryStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const categoryStore = useCategoryStore();
const { categories } = storeToRefs(categoryStore);
const { addCategory } = categoryStore;

const confirmAdd = ref(false);
</script>
