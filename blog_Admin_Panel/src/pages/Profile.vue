<template>
  <div class="w-full h-full p-6 bg-gray-50 flex gap-6">
    <el-card class="w-1/3 h-full flex flex-col items-center pt-10" shadow="sm">
      <div class="flex flex-col items-center w-full">
        <el-avatar :size="100" :src="userUrl" class="mb-4 shadow-md" />
        <h2 class="text-2xl font-bold text-gray-800 mb-1">{{ username }}</h2>
        <p class="text-gray-500 mb-8">{{ profession || "暂无职位" }}</p>

        <div class="w-full px-8 space-y-4">
          <div>
            <label class="text-sm text-gray-500">头像 URL</label>
            <el-input v-model="userUrl" placeholder="输入图片地址" size="small" />
          </div>
          <div>
            <label class="text-sm text-gray-500">登录账号 (不可修改)</label>
            <el-input v-model="username" disabled />
          </div>
          <div>
            <label class="text-sm text-gray-500">联系电话</label>
            <el-input v-model="phone" placeholder="未设置" />
          </div>

          <el-button type="primary" class="w-full mt-4" @click="saveProfile">保存修改</el-button>

          <div class="flex justify-between mt-4">
            <el-button link type="primary" @click="changeBoard = true">修改密码</el-button>
            <el-button link type="danger" @click="handleLogout">退出登录</el-button>
          </div>
        </div>
      </div>
    </el-card>

    <el-card class="w-2/3 h-full" shadow="sm">
      <template #header>
        <div class="card-header">
          <span class="font-bold text-lg">个人简介 / About Me</span>
        </div>
      </template>
      <el-input
        type="textarea"
        resize="none"
        :rows="20"
        v-model="introduction"
        placeholder="在这里写下您的个人简介..."
        class="text-lg"
      ></el-input>
    </el-card>

    <el-dialog title="修改密码" v-model="changeBoard" width="30%">
      <div class="py-4">
        <el-alert
          title="提示"
          type="info"
          description="修改密码功能需要后端接口支持，暂未实现。"
          show-icon
          :closable="false"
        />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="changeBoard = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/counter";

const router = useRouter();
const userStore = useUserStore();
const { Logout } = userStore;

const handleLogout = () => {
  Logout();
  router.push("/login");
};

const userUrl = ref("");
const username = ref("");
const phone = ref("");
const profession = ref("");
const introduction = ref("");
const changeBoard = ref(false);

const currentUser = localStorage.getItem("currentUser");

onMounted(() => {
  if (!currentUser) {
    ElMessage.error("请先登录");
    router.push("/login");
  } else {
    const storageKey = `userProfile_${currentUser}`;
    const savedProfile = JSON.parse(localStorage.getItem(storageKey));

    if (savedProfile) {
      userUrl.value = savedProfile.userUrl;
      username.value = savedProfile.username;
      phone.value = savedProfile.phone;
      profession.value = savedProfile.profession;
      introduction.value = savedProfile.introduction;
    } else {
      // 修复：默认显示当前登录的用户名，而不是 admin
      userUrl.value = "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png";
      username.value = currentUser;
      phone.value = "";
      profession.value = "新用户";
      introduction.value = "这是我的个人简介。";
    }
  }
});

const saveProfile = () => {
  if (!currentUser) return;
  const userProfile = {
    userUrl: userUrl.value,
    username: username.value,
    phone: phone.value,
    profession: profession.value,
    introduction: introduction.value,
  };
  localStorage.setItem(`userProfile_${currentUser}`, JSON.stringify(userProfile));
  ElMessage({ message: "个人资料保存成功", type: "success" });
};
</script>
