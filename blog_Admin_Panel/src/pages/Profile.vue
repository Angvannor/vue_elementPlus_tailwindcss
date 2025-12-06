<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex justify-between">
      <div class="w-1/2 h-full p-10 flex flex-col justify-center">
        <div class="w-2/3 h-full m-auto flex flex-col justify-center">
          <div class="flex items-center mb-6">
            <h1 class="w-24 font-bold">头像：</h1>
            <el-avatar :size="size" :src="userUrl"></el-avatar>
            <el-input
              v-model="userUrl"
              placeholder="输入图片URL"
              class="ml-4 w-1/2"
              size="small"
            ></el-input>
          </div>
          <div class="flex items-center mb-6">
            <h1 class="w-24 font-bold">用户名：</h1>
            <el-input v-model="username" disabled></el-input>
          </div>
          <div class="flex items-center mb-6">
            <h1 class="w-24 font-bold">电话号码：</h1>
            <el-input v-model="phone" placeholder="请输入电话号码"></el-input>
          </div>
          <div class="flex items-center mb-6">
            <h1 class="w-24 font-bold">密码：</h1>
            <h1 class="text-blue-500 cursor-pointer hover:underline" @click="changeBoard = true">
              修改密码
            </h1>
          </div>
          <div class="flex items-center mb-6">
            <h1 class="w-24 font-bold">职业：</h1>
            <el-input v-model="profession" placeholder="请输入职业"></el-input>
          </div>

          <div class="mt-4">
            <el-button type="danger" @click="saveProfile" class="w-full">保存资料</el-button>
          </div>
        </div>
      </div>

      <div class="w-1/2 h-full bg-gray-50">
        <div class="w-full h-full flex flex-col justify-center p-10">
          <div class="w-[80%] m-auto">
            <h1 class="mb-4 font-bold text-lg">个人简介：</h1>
            <el-input
              type="textarea"
              resize="none"
              :rows="12"
              v-model="introduction"
              placeholder="请输入个人简介..."
            ></el-input>
          </div>
        </div>
      </div>

      <el-dialog title="修改密码" v-model="changeBoard" width="30%">
        <span>修改密码功能需要后端接口支持，暂未实现。</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="changeBoard = false">关 闭</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();
const size = 80;

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
  }
});

// 读取本地存储的用户资料
const storageKey = `userProfile_${currentUser}`;
const savedProfile = JSON.parse(localStorage.getItem(storageKey));
if (savedProfile) {
  userUrl.value = savedProfile.userUrl;
  username.value = savedProfile.username;
  phone.value = savedProfile.phone;
  profession.value = savedProfile.profession;
  introduction.value = savedProfile.introduction;
} else {
  userUrl.value = "https://via.placeholder.com/80";
  username.value = "admin";
  phone.value = "1234567890";
  profession.value = "管理员";
  introduction.value = "这是我的个人简介。";
}

// 保存个人资料函数
const saveProfile = () => {
  if (!currentUser) return;

  const userProfile = {
    userUrl: userUrl.value,
    username: username.value,
    phone: phone.value,
    profession: profession.value,
    introduction: introduction.value,
  };

  localStorage.setItem("userProfile", JSON.stringify(userProfile));
  ElMessage({ message: "个人资料保存成功", type: "success" });
};
</script>
