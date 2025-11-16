<template>
  <div class="w-full h-full bg-gray-100 rounded-2xl">
    <el-scrollbar height="1000">
      <div class="h-full w-full flex flex-wrap justify-start">
        <div
          v-for="(item, index) in mergedItems"
          :key="index"
          class="w-[290px] bg-gray-200 p-2 rounded-b-lg mx-4 my-2 hover:p-1 duration-100 ease-linear"
          @click="addGood(index)"
        >
          <div class="w-full aspect-square overflow-hidden mb-2">
            <img :src="item.image" alt="无法显示图片" class="w-full h-full object-cover" />
          </div>

          <h1 class="text-center text-2xl font-bold">{{ item.name }}</h1>
          <p class="text-center text-xl text-red-500">¥ {{ item.price }}</p>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useShoppingStore } from "@/stores/counter";

const ShoppingStore = useShoppingStore();

const { items } = storeToRefs(ShoppingStore);
const { addGood } = ShoppingStore;

const imagePaths = ref([
  "/images/bag.jpg",
  "/images/basketball.jpg",
  "/images/cake.jpg",
  "/images/camera.jpg",
  "/images/earphone.jpg",
  "/images/glass.jpg",
  "/images/headphone.jpg",
  "/images/makeup.jpg",
  "/images/milk.jpg",
  "/images/shoe.jpg",
  "/images/sofa.jpg",
  "/images/strawberry.jpg",
  "/images/wine.jpg",
]);

const mergedItems = computed(() => {
  return items.value.map((item, index) => ({
    ...item,
    image: imagePaths.value[index],
  }));
});
</script>
