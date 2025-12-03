<template>
  <div class="h-screen w-full bg-linear-to-r from-blue-100 to-cyan-100 flex">
    <div class="h-2/3 w-2/5 bg-white opacity-50 rounded-lg m-auto">
      <div class="m-auto h-1/6"></div>
      <div class="m-auto h-2/3 w-2/3 bg-blue-50 rounded-lg justify-center">
        <div class="h-1/5 w-full pt-6">
          <h1 class="text-4xl font-bold text-center">注册</h1>
        </div>
        <div class="h-3/5 w-2/3 m-auto mt-8">
          <el-input placeholder="用户名" v-model="username" class="h-[10%]!"></el-input>
          <el-input placeholder="密码" v-model="password" class="h-[10%]! mt-4"></el-input>
          <el-input
            placeholder="确认密码"
            v-model="confirmPassword"
            class="h-[10%]! mt-4"
          ></el-input>
        </div>
        <div class="h-1/5 w-1/5 m-auto mt-4">
          <el-button type="primary" class="w-full!" @click="onRegister">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/counter";
import { ElMessage } from "element-plus";

const router = useRouter();
const userStore = useUserStore();

const username = ref("");
const password = ref("");
const confirmPassword = ref("");

const onRegister = () => {
  const ok = userStore.RegisterAccount({
    username: username.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });
  if (ok) {
    ElMessage.success("注册成功，进入管理页面");
    router.push("/admin");
  }
};
</script>
