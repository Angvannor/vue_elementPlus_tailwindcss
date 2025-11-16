<template>
  <div class="w-full h-full shadow-lg bg-gray-100 p-4" v-if="chosenItems">
    <el-scrollbar height="1000">
      <div class="w-full h-full bg-white shadow-lg">
        <div
          v-for="(chosenItem, index) in chosenItems"
          :key="index"
          class="w-full h-[20%] rounded-2xl m-auto mb-2 bg-white shadow-lg"
        >
          <div class="flex p-2 bg-gray-50 justify-between">
            <div class="h-full w-2/3">
              <h1 class="text-center text-2xl font-bold">{{ chosenItem.name }}</h1>
              <p class="text-center text-xl text-red-500">¥ {{ chosenItem.price }}</p>
            </div>
            <div class="h-full w-1/3">
              <el-button type="default" @click="decreaseAmount(itemName)" circle>-</el-button>
              <el-button type="primary" @click="increaseAmount(itemName)" circle>+</el-button>
            </div>
            <div class="h-full aspect-square shadow-lg">
              <h1>{{ chosenItem.amount }}</h1>
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
  <div v-else class="w-full h-full shadow-lg bg-gray-100 p-4">
    <h1 class="text-center">购物车是空的，请去添加一些吧！</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useShoppingStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const ShoppingStore = useShoppingStore();

const { chosenItems } = storeToRefs(ShoppingStore);
</script>
