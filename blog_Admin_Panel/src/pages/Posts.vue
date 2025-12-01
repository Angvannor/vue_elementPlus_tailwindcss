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
        <el-button
          type="danger"
          @click="searchPost({ keyword: name, status: status, category: category })"
          >搜索</el-button
        >
      </div>
    </div>
    <div class="w-full pl-10">
      <el-button type="danger" @click="confirmAdd = true">添加文章</el-button>
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
    <div class="w-1/3 h-1/2 rounded-2xl bg-gray-50 m-auto z-10" v-if="confirmAdd">
      <div class="w-full h-1/6 flex justify-end pr-6 pt-6">
        <el-button
          icon="el-icon-close"
          class="bg-blue-500! text-white!"
          circle
          @click="confirmAdd = false"
          >X</el-button
        >
      </div>
      <div class="w-full h-1/3 flex flex-col items-center">
        <div class="w-4/5 h-1/6">
          <el-input placeholder="文章标题" v-model="postTitle" class="w-full!"></el-input>
        </div>
        <div class="w-4/5 h-1/2 mt-4">
          <el-input
            type="textarea"
            placeholder="文章内容"
            v-model="postContent"
            class="w-full! h-full!"
          ></el-input>
        </div>
        <div class="w-full h-1/3 flex justify-around items-center p-4">
          <div class="w-1/3">
            <el-select placeholder="选择类别" v-model="postCategory">
              <el-option
                v-for="post in posts"
                :key="post.value"
                :label="post.category"
                :value="post.value"
              ></el-option>
            </el-select>
          </div>
          <div class="w-1/3">
            <el-select placeholder="选择状态" v-model="postStatus">
              <el-option
                v-for="post in posts"
                :key="post.value"
                :label="post.status"
                :value="post.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="w-4/5 h-1/6 mt-40 flex justify-center items-center">
          <el-button
            type="primary"
            @click="
              addPost({
                title: postTitle,
                content: postContent,
                category: postCategory,
                status: postStatus,
              })
            "
            >添加文章</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";

import { useBlogStore } from "@/stores/counter";
const blogStore = useBlogStore();

const { posts } = storeToRefs(blogStore);
const { searchPost, addPost } = blogStore;

const confirmAdd = ref(false);
</script>
