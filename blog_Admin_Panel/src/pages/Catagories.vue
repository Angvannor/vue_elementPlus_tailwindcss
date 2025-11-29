<template>
  <div class="w-full h-full">
    <div class="w-full h-[10%] flex items-center justify-between px-4">
      <el-button type="danger" @click="addCategory"> Add Category </el-button>
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
  </div>
</template>

<script setup></script>
