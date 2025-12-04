<template>
  <div class="w-full h-full bg-gray-100">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Document /></el-icon>
          <span>博客管理</span>
        </template>
        <el-menu-item index="1-1" @click="jumpToPosts">文章管理</el-menu-item>
        <el-menu-item index="1-2" @click="jumpToCatas">分类管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><User /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="2-1" @click="jumpToUsers">用户列表</el-menu-item>
        <el-menu-item index="2-2" @click="jumpToProfile">个人设置</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import router from "@/router";

const jumpToPosts = () => {
  router.push("/admin/posts");
};

const jumpToCatas = () => {
  router.push("/admin/catagories");
};

const jumpToUsers = () => {
  router.push("/admin/users");
};

const jumpToProfile = () => {
  router.push("/admin/profile");
};

const jumpToBasicSettings = () => {
  router.push("/admin/settings");
};
</script>
