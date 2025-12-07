<template>
  <div
    class="h-screen w-full flex justify-center items-center bg-gradient-to-bl from-cyan-400 to-blue-500"
  >
    <div class="w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div class="h-32 bg-cyan-600 flex flex-col justify-center items-center text-white">
        <h1 class="text-3xl font-bold tracking-wider">创建账户</h1>
        <p class="text-sm opacity-80 mt-2">注册以加入管理系统</p>
      </div>

      <div class="p-8">
        <div class="space-y-5">
          <el-input v-model="username" placeholder="设置用户名" size="large" :prefix-icon="User" />

          <el-input
            v-model="password"
            placeholder="设置密码"
            size="large"
            type="password"
            show-password
            :prefix-icon="Lock"
          />

          <el-input
            v-model="confirmPassword"
            placeholder="确认密码"
            size="large"
            type="password"
            show-password
            :prefix-icon="Check"
            @keyup.enter="onRegister"
          />

          <el-button
            type="primary"
            color="#0891b2"
            size="large"
            class="w-full text-lg font-bold mt-4"
            :loading="loading"
            @click="onRegister"
            round
          >
            立即注册
          </el-button>

          <div class="text-center text-sm text-gray-500 mt-4">
            已有账号？
            <span
              class="text-cyan-600 cursor-pointer hover:underline font-bold"
              @click="jumpToLogin"
            >
              去登录
            </span>
          </div>
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
import { User, Lock, Check } from "@element-plus/icons-vue";

const router = useRouter();
const userStore = useUserStore();
const { RegisterAccount } = userStore;

const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const loading = ref(false);

const onRegister = async () => {
  loading.value = true;

  // 简单的前端校验（Store里虽然有，但前端防抖体验更好）
  if (password.value !== confirmPassword.value) {
    ElMessage.error("两次输入的密码不一致");
    loading.value = false;
    return;
  }

  setTimeout(() => {
    const success = RegisterAccount({
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });

    if (success) {
      // 注册成功后通常建议跳转登录页，或者直接进首页
      // 这里根据您的逻辑直接进首页
      router.push("/admin");
    }
    loading.value = false;
  }, 600);
};

const jumpToLogin = () => {
  router.push("/login");
};
</script>
