<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/SideBar.vue";
import router from "@/router";
</script>

<template>
  <div class="h-screen">
    <div class="h-[5%] w-full">
      <Header />
    </div>
    <div class="h-[1%] bg-gray-100"></div>
    <div class="h-[94%] w-full flex">
      <div class="w-1/8 shrink-0 h-full">
        <Sidebar />
      </div>
      <main class="h-full flex-1 min-w-0 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>
