<template>
  <div class="h-full w-full">
    <div class="w-full h-[10%] flex justify-between">
      <div class="w-1/6 h-full flex items-center pl-6">
        <el-input placeholder="搜索名字" v-model="name"></el-input>
      </div>
      <div class="w-1/6 h-full flex items-center">
        <el-input placeholder="搜索电话号码" v-model="PhoneNumber"></el-input>
      </div>
      <div class="w-4/7 h-full flex items-center">
        <el-button type="danger" @click="Search">搜索</el-button>
      </div>
    </div>
    <div class="w-full pl-10">
      <el-button type="danger" @click="confirmAdd = true">添加账户</el-button>
    </div>
    <el-divider :direction="horizontal" :content-position="center"></el-divider>
    <div class="pl-10">
      <el-table :data="accounts" style="width: 100%">
        <el-table-column prop="avater" label="头像" width="180" />
        <el-table-column prop="information" label="信息" width="1440" />
        <el-table-column prop="character" label="职位" width="360" />
        <el-table-column prop="date" label="日期" />
        <el-table-column label="操作" width="100" fixed="right"> </el-table-column>
      </el-table>
    </div>

    <div class="w-1/3 h-1/2 rounded-2xl bg-gray-50 m-auto z-10" v-if="confirmAdd">
      <div class="w-full h-1/6 flex justify-end pr-6 pt-6">
        <el-button
          icon="el-icon-close"
          class="bg-blue-500! text-white! text-center!"
          circle
          @click="confirmAdd = false"
          >X</el-button
        >
      </div>
      <div class="w-full h-5/6 flex flex-col items-center">
        <div class="w-4/5 h-1/6">
          <el-input placeholder="用户名" v-model="userName" class="w-full!"></el-input>
        </div>
        <div class="w-4/5 h-1/6 mt-4">
          <el-input placeholder="电话号码" v-model="phoneNumber" class="w-full!"></el-input>
        </div>
        <div class="w-4/5 h-1/6 mt-4">
          <el-input
            type="password"
            placeholder="密码"
            v-model="password"
            class="w-full!"
          ></el-input>
        </div>
        <div class="w-full h-1/3 flex justify-around items-center p-4">
          <div class="w-full flex justify-center">
            <el-button type="primary" @click="addUser">确认添加</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const confirmAdd = ref(false);
</script>
