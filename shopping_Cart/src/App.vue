<script setup>
import shopping from "./components/shopping.vue";
import Cart from "./components/Cart.vue";
import { ElMessage } from "element-plus";

const pay = () => {
  ElMessage.success("支付成功！");
};

import { useShoppingStore } from "./stores/counter";
import { storeToRefs } from "pinia";
const ShoppingStore = useShoppingStore();

const { computeTotalPrice } = storeToRefs(ShoppingStore);

const totalPrice = computeTotalPrice;
</script>

<template>
  <div class="h-screen flex">
    <div class="w-2/3 h-2/3 m-auto p-5 flex">
      <div class="w-1/3 h-full m-auto shadow-lg rounded-2xl bg-gray-50">
        <div
          class="bg-blue-400 text-center text-white leading-10 font-bold text-2xl p-1 rounded-t-2xl"
        >
          <el-icon><ShoppingCart /></el-icon>Shopping Page
        </div>
        <div class="w-[95%] h-[95%] m-auto">
          <shopping />
        </div>
      </div>
      <div class="w-1/3 h-full m-auto shadow-lg rounded-2xl bg-gray-50">
        <div
          class="bg-blue-400 text-center text-white leading-10 font-bold text-2xl p-1 rounded-t-2xl"
        >
          <el-icon><ShoppingCartFull /></el-icon>Cart Page
        </div>
        <div class="w-full h-[90%] p-5">
          <Cart />
        </div>
        <div class="h-[50px] w-[95%] m-auto bg-white justify-between flex rounded-2xl">
          <h1 class="leading-12 font-bold text-2xl">合计：共{{ totalPrice || 0 }}元</h1>
          <div class="w-1/5 h-full">
            <el-button type="primary" @click="pay" class="w-full! h-full! rounded-r-2xl!"
              >结算</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
