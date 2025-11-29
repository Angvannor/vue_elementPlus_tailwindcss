<template>
  <div class="h-full w-full">
    <div class="w-full h-[10%] flex justify-between">
      <div class="w-1/6 h-full flex items-center pl-6">
        <el-input placeholder="搜索文章名" v-model="name"></el-input>
      </div>
      <div class="w-1/8 h-full flex items-center pl-6">
        <el-select placeholder="选择状态" v-model="status">
          <el-option
            v-for="post in posts"
            :key="post.value"
            :label="post.status"
            :value="post.value"
          ></el-option>
        </el-select>
      </div>
      <div class="w-1/6 h-full flex items-center pl-6">
        <el-select placeholder="选择类别" v-model="category">
          <el-option
            v-for="post in posts"
            :key="post.value"
            :label="post.category"
            :value="post.value"
          ></el-option>
        </el-select>
      </div>
      <div class="w-1/2 h-full flex items-center pl-6">
        <el-button type="danger" @click="Search">搜索</el-button>
      </div>
    </div>
    <div class="w-full pl-10">
      <el-button type="danger" @click="addPosts">添加文章</el-button>
    </div>
    <el-divider :direction="horizontal" :content-position="center"></el-divider>
    <div class="pl-10">
      <el-table :data="posts" style="width: 100%">
        <el-table-column prop="information" label="信息" width="1440" />
        <el-table-column prop="category" label="类别" width="360" />
        <el-table-column prop="status" label="状态" width="360" />
        <el-table-column prop="date" label="日期" />
        <el-table-column label="操作" width="100" fixed="right"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup></script>
