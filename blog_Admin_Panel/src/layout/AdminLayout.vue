<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/SideBar.vue";
import router from "@/router";
</script>

<template>
  <div class="h-screen">
    <div class="h-[10%] w-full">
      <Header />
    </div>
    <div class="h-[90%] w-full">
      <Sidebar />
      <main class="h-full w-full">
        <router-view />
      </main>
    </div>
  </div>
</template>
