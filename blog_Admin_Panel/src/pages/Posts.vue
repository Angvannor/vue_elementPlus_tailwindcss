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
      <div class="w-1/8 h-full flex items-center pl-6">
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

    <el-divider direction="horizontal" content-position="center"></el-divider>

    <div class="pl-10">
      <el-table :data="posts" style="width: 100%">
        <el-table-column prop="information" label="信息" width="1080" />
        <el-table-column prop="category" label="类别" width="360" />
        <el-table-column prop="status" label="状态" width="360" />
        <el-table-column prop="date" label="日期" />
        <el-table-column label="操作" width="150" fixed="right">
          <template #default="{ row }">
            <el-button type="danger" size="small" @click="removePost(row.id)">删除</el-button>
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
          <el-input placeholder="文章标题" v-model="postTitle" class="w-full!"></el-input>
        </div>
        <div class="w-4/5 h-[75%] mt-4">
          <el-input
            type="textarea"
            placeholder="文章内容"
            v-model="postContent"
            class="w-full! h-full!"
            resize="none"
            rows="10"
          ></el-input>
        </div>
        <div class="w-4/5 h-1/6 mt-4 flex justify-between gap-4">
          <div class="w-1/2">
            <el-select placeholder="选择类别" v-model="postCategory" class="w-full!">
              <el-option
                v-for="post in posts"
                :key="post.value"
                :label="post.category"
                :value="post.value"
              ></el-option>
            </el-select>
          </div>
          <div class="w-1/2">
            <el-select placeholder="选择状态" v-model="postStatus" class="w-full!">
              <el-option
                v-for="post in posts"
                :key="post.value"
                :label="post.status"
                :value="post.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="w-full h-1/3 flex justify-center items-center p-4">
          <el-button
            type="primary"
            @click="
              addPost({
                title: postTitle,
                content: postContent,
                category: postCategory,
                status: postStatus,
              });
              confirmAdd = false;
            "
            >确认添加</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/counter";

const blogStore = useBlogStore();
const { posts } = storeToRefs(blogStore);
const { searchPost, addPost, deletePost } = blogStore;

const confirmAdd = ref(false);

const removePost = (id) => {
  ElMessageBox.confirm("确定删除吗?", "警告", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    deletePost(id);
  });
};
</script>
