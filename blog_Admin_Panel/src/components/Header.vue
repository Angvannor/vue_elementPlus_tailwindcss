<template>
  <div class="w-full h-full flex justify-between items-center px-5 bg-white shadow-sm">
    <h1 class="text-2xl text-blue-500 font-bold tracking-wide">后台博客管理系统</h1>

    <div class="h-full flex items-center">
      <el-dropdown trigger="click">
        <div class="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
          <el-avatar
            :size="32"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            class="mr-2"
          />
          <span class="font-medium text-gray-700 select-none">
            {{ currentUser || "未登录" }}
          </span>
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="toProfile">个人资料</el-dropdown-item>
            <el-dropdown-item divided @click="handleLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/counter"; // 确保路径正确
import { ArrowDown } from "@element-plus/icons-vue"; // 如果报错，请确保安装了图标库

const router = useRouter();
const userStore = useUserStore();

// 使用 storeToRefs 保持响应性，这样登录/退出时名字会自动变化
const { currentUser } = storeToRefs(userStore);
const { Logout } = userStore;

// 跳转到个人资料
const toProfile = () => {
  router.push("/admin/profile");
};

// 处理退出登录
const handleLogout = () => {
  Logout(); // 清除状态
  router.push("/login"); // 跳转回登录页
};
</script>

<style scoped>
/* 简单的样式微调，让 Header 看起来更垂直居中 */
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
