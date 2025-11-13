<script setup></script>

<template>
  <div class="h-screen flex">
    <div class="w-2/3 h-2/3 m-auto p-5 flex">
      <div class="w-1/3 h-full m-auto shadow-lg rounded-2xl">
        <div
          class="bg-blue-400 text-center text-white leading-10 font-bold text-2xl p-1 rounded-t-2xl"
        >
          <el-icon><ShoppingCart /></el-icon>Shopping Page
        </div>
      </div>
      <div class="w-1/3 h-full m-auto shadow-lg">
        <div
          class="bg-blue-400 text-center text-white leading-10 font-bold text-2xl p-1 rounded-t-2xl"
        >
          <el-icon><ShoppingCartFull /></el-icon>Cart Page
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
