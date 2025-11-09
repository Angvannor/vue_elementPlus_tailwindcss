<script setup>
import { ref } from "vue";

const value = ref();
import { Timer } from "@element-plus/icons-vue";
</script>

<template>
  <div class="h-screen flex">
    <div class="w-1/4 h-2/3 m-auto shadow-lg rounded-2xl">
      <h1 class="text-3xl text-center font-bold m-5">
        <el-icon><Timer /></el-icon>Pomodoro
      </h1>
      <div class="w-9/10 m-auto">
        <el-divider :direction="horizontal" :content-position="center"></el-divider>
      </div>
      <div class="w-4/5 h-1/3 m-auto p-2 shadow-lg rounded-2xl"></div>
      <div class="w-9/10 m-auto">
        <el-divider :direction="horizontal" :content-position="center"></el-divider>
      </div>
      <div class="w-4/5 h-1/2 m-auto p-2 shadow-lg rounded-2xl">
        <div class="w-9/10 m-auto">
          <h1 class="text-left text-xl font-bold">Task Add</h1>
          <el-divider :direction="horizontal" :content-position="center"></el-divider>
        </div>
        <div class="w-4/5 m-auto">
          <el-input placeholder="add a task" v-model="name"></el-input>
          <el-time-picker
            v-model="value"
            value-format="HH:mm:ss"
            placeholder=""
            clearable
            @change="getTime"
            class="w-full!"
          ></el-time-picker>
          <div class="flex">
            <el-button type="primary" @click="addTask" class="m-auto">开始倒计时</el-button>
          </div>
          <h1 class="text-center">预计在...完成</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
