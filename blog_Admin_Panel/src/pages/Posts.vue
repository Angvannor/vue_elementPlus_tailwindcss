<template>
  <div class="h-full w-full">
    <div class="w-full h-[10%] flex justify-between">
      <div class="w-1/6 h-full flex items-center pl-6">
        <h1 class="m-4 text-2xl">Posts</h1>
        <el-input placeholder="Search for name" v-model="name"></el-input>
      </div>
      <div class="w-1/8 h-full flex items-center pl-6">
        <h1 class="m-4 text-2xl">Status</h1>
        <el-select placeholder="Select status" v-model="status">
          <el-option
            v-for="post in posts"
            :key="post.value"
            :label="post.status"
            :value="post.value"
          ></el-option>
        </el-select>
      </div>
      <div class="w-1/6 h-full flex items-center pl-6">
        <h1 class="m-4 text-2xl">Categories</h1>
        <el-select placeholder="Select category" v-model="category">
          <el-option
            v-for="post in posts"
            :key="post.value"
            :label="post.category"
            :value="post.value"
          ></el-option>
        </el-select>
      </div>
      <div class="w-1/2 h-full flex items-center pl-6">
        <el-button type="danger" @click="Search">Search</el-button>
      </div>
    </div>
    <div class="w-full pl-10">
      <el-button type="danger" @click="addPosts">Add Posts</el-button>
    </div>
    <el-divider :direction="horizontal" :content-position="center"></el-divider>
    <div class="pl-10">
      <el-table :data="posts" style="width: 100%">
        <el-table-column prop="information" label="Information" width="720" />
        <el-table-column prop="category" label="Category" width="180" />
        <el-table-column prop="status" label="Status" width="180" />
        <el-table-column prop="date" label="Date" width="360" />
        <el-table-column label="操作" width="100" fixed="right"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup></script>
