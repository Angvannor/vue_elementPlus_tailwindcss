<template>
  <div
    class="h-screen w-full flex justify-center items-center bg-gradient-to-br from-blue-500 to-cyan-400"
  >
    <div class="w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div class="h-32 bg-blue-600 flex flex-col justify-center items-center text-white">
        <h1 class="text-3xl font-bold tracking-wider">欢迎回来</h1>
        <p class="text-sm opacity-80 mt-2">请登录您的管理账号</p>
      </div>

      <div class="p-8">
        <div class="space-y-6">
          <el-input
            v-model="username"
            placeholder="请输入用户名"
            size="large"
            :prefix-icon="User"
          />

          <el-input
            v-model="password"
            placeholder="请输入密码"
            size="large"
            type="password"
            show-password
            :prefix-icon="Lock"
            @keyup.enter="onLogin"
          />

          <div class="flex justify-between items-center text-sm">
            <el-checkbox v-model="rememberMe">记住我</el-checkbox>
            <span class="text-blue-500 cursor-pointer hover:underline" @click="jumpToRegister">
              注册新账号
            </span>
          </div>

          <el-button
            type="primary"
            size="large"
            class="w-full text-lg font-bold"
            :loading="loading"
            @click="onLogin"
            round
          >
            登 录
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/counter";
import { User, Lock } from "@element-plus/icons-vue"; // 引入图标

const router = useRouter();
const userStore = useUserStore();
const { LoginAccount } = userStore;

const username = ref("");
const password = ref("");
const rememberMe = ref(false);
const loading = ref(false);

const onLogin = async () => {
  loading.value = true;
  // 模拟一点延迟，让交互更有质感
  setTimeout(async () => {
    const success = LoginAccount({
      username: username.value,
      password: password.value,
    });

    if (success) {
      router.push("/admin");
    }
    loading.value = false;
  }, 500);
};

const jumpToRegister = () => {
  router.push("/register"); // 建议路由路径统一小写
};
</script>

<style scoped>
/* 可以在这里添加一些微动画 */
</style>
