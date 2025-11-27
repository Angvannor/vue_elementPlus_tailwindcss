<template>
  <div class="w-1/8 h-full bg-gray-100">
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
        <el-menu-item index="1-1">文章管理</el-menu-item>
        <el-menu-item index="1-2">分类管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><User /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="2-1">用户列表</el-menu-item>
        <el-menu-item index="2-2">个人设置</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统设置</span>
        </template>
        <el-menu-item index="3-1">基本设置</el-menu-item>
        <el-menu-item index="3-2">安全设置</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup></script>
