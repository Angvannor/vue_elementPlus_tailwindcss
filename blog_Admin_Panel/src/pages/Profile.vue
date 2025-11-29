<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex justify-between">
      <div class="w-1/2 h-full p-10 flex flex-col justify-center">
        <div class="w-1/2 h-[10%] m-auto">
          <div class="flex items-center mb-4">
            <h1>头像：</h1>
            <el-avatar :size="size" :src="userUrl"></el-avatar>
          </div>
          <div class="flex items-center mb-4 pt-8">
            <h1 class="w-20">用户名：</h1>
            <el-input v-model="username" placeholder="请输入用户名"></el-input>
          </div>
          <div class="flex items-center mb-4 pt-8">
            <h1 class="w-20">电话号码：</h1>
            <el-input v-model="phone" placeholder="请输入电话号码"></el-input>
          </div>
          <div class="flex items-center mb-4 pt-8">
            <h1 class="w-20">密码：</h1>
            <h1 class="text-blue-400 cursor-pointer" @click="changePassword">修改密码</h1>
          </div>
          <div class="flex items-center mb-4 pt-8">
            <h1 class="w-20">职业：</h1>
            <el-input v-model="profession" placeholder="请输入职业"></el-input>
          </div>
        </div>
        <div class="w-[10%] h-1/3 m-auto">
          <el-button type="danger" @click="saveProfile" class="w-full!">保存</el-button>
        </div>
      </div>
      <div class="w-1/2 h-full">
        <div class="w-full h-1/3 flex flex-col justify-center p-10">
          <div class="w-[70%] mb-4 m-auto">
            <h1 class="mb-2">个人简介：</h1>
            <el-input
              type="textarea"
              :rows="10"
              v-model="introduction"
              placeholder="请输入个人简介"
            ></el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
