<template>
  <div class="h-full bg-green-50">
    <div class="h-1/3 w-1/3 m-auto"></div>
    <div class="h-1/3 w-1/3 m-auto">
      <h1 class="text-center text-5xl font-bold leading-tight">Dashboard</h1>
      <h1 class="text-center text-2xl font-bold leading-tight">
        欢迎使用博客管理系统后台管理界面。
      </h1>
      <div class="w-[30%] m-auto">
        <span class="text-xl">如果没有登录的话，请先</span>
        <span @click="jumpToLogin" class="text-xl text-blue-500 cursor-pointer">登录</span>
        <span class="text-xl">。</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const jumpToLogin = () => {
  window.location.href = "/login";
};
</script>
