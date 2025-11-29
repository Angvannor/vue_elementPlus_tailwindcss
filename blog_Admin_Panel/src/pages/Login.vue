<template>
  <div class="h-screen w-full bg-linear-to-r from-cyan-100 to-blue-100 flex">
    <div class="h-full w-[65%]"></div>
    <div class="h-full w-1/4 bg-white opacity-50">
      <div class="m-auto h-1/4"></div>
      <div class="m-auto h-1/2 w-2/3 bg-blue-50 rounded-lg justify-center">
        <div class="h-1/5 w-full pt-6">
          <h1 class="text-4xl font-bold text-center">登录</h1>
        </div>
        <div class="h-3/5 w-2/3 m-auto mt-8">
          <el-input placeholder="用户名" v-model="username" class="h-[10%]!"></el-input>
          <el-input placeholder="密码" v-model="password" class="h-[10%]! mt-4"></el-input>
          <div class="h-1/5 w-full mt-4 text-right text-blue-400 cursor-pointer">
            <p @click="jumpToRegister">创建新用户</p>
          </div>
        </div>
        <div class="h-1/5 w-1/5 m-auto mt-4">
          <el-button type="primary" @click="LoginAccount" class="w-full!">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const jumpToRegister = () => {
  router.push("/Register");
};
</script>
