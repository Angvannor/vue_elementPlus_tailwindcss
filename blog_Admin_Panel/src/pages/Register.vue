<template>
  <div class="h-screen w-full bg-red-100 flex">
    <div class="h-2/3 w-2/5 bg-white opacity-50 rounded-lg m-auto">
      <div class="m-auto h-1/6"></div>
      <div class="m-auto h-2/3 w-2/3 bg-red-50 rounded-lg justify-center">
        <div class="h-1/5 w-full pt-6">
          <h1 class="text-4xl font-bold text-center">Register</h1>
        </div>
        <div class="h-3/5 w-2/3 m-auto mt-8">
          <el-input placeholder="Username" class="h-[10%]!"></el-input>
          <el-input placeholder="Password" class="h-[10%]! mt-4"></el-input>
          <el-input placeholder="Confirm Password" class="h-[10%]! mt-4"></el-input>
        </div>
        <div class="h-1/5 w-1/5 m-auto mt-4">
          <el-button type="primary" class="w-full!" @click="RegisterAccount">Register</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const RegisterAccount = () => {
  router.push("/admin");
};
</script>
