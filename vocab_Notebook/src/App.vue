<template>
  <div
    class="h-screen"
    style="
      background-color: #f3f4f6;
      background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
      background-size: 24px 24px;
    "
  >
    <div class="h-1/8"></div>
    <h1 class="text-center text-4xl font-bold">Vocab Notebook</h1>
    <div class="m-auto w-1/2 h-2/3 flex">
      <div class="w-1/3 h-2/3 bg-zinc-50 rounded-3xl m-auto shadow-md p-5 mr-10">
        <div class="mb-10 m-auto w-4/5 inset-shadow-gray-50 shadow-md">
          <el-input
            placeholder="search"
            v-model="search_word"
            :prefix-icon="Search"
            class="h-10!"
          ></el-input>
        </div>
        <div class="w-4/5 h-2/5 bg-neutral-100 rounded-2xl shadow-md m-auto p-2 mb-10">
          <div class="flex items-baseline m-3">
            <h1 class="text-3xl font-bold font-mono italic">{{ words[0].name }}</h1>
            <p class="text-xl text-gray-600 font-serif ml-2 italic">{{ words[0].nature + "." }}</p>
            <p class="text-2xs text-gray-600 font-sans italic font-bold">
              {{ words[0].interpretation }}
            </p>
          </div>
          <div class="m-auto shadow-md p-2 bg-gray-50 rounded-2xl">
            <h1 class="font-serif font-bold">Example</h1>
            <p class="font-mono font-bold m-2">{{ words[0].example }}</p>
          </div>
        </div>
        <div class="w-4/5 h-2/5 bg-neutral-100 rounded-2xl shadow-md m-auto p-2">
          <div class="flex items-baseline m-3">
            <h1 class="text-3xl font-bold font-mono italic">{{ words[0].name }}</h1>
            <p class="text-xl text-gray-600 font-serif ml-2 italic">{{ words[0].nature + "." }}</p>
            <p class="text-2xs text-gray-600 font-sans italic font-bold">
              {{ words[0].interpretation }}
            </p>
          </div>
          <div class="m-auto shadow-md p-2 bg-gray-50 rounded-2xl">
            <h1 class="font-serif font-bold">Example</h1>
            <p class="font-mono font-bold m-2">{{ words[0].example }}</p>
          </div>
        </div>
      </div>
      <div class="w-1/2 h-2/3 bg-gray-50 rounded-3xl m-auto shadow-md">
        <h1 class="text-center text-2xl font-bold m-3">Word Book</h1>
        <el-table :data="words" border class="w-9/10! m-auto">
          <el-table-column label="WordName" prop="name" width="120"></el-table-column>
          <el-table-column label="Nature" prop="nature" width="80"></el-table-column>
          <el-table-column label="Trans" prop="interpretation" width="100"></el-table-column>
          <el-table-column label="Example" prop="example" max-width="400"></el-table-column>
          <el-table-column label="Operate" prop="Operation" width="90">
            <el-button type="danger" @click="delete_word">删除</el-button>
          </el-table-column>
        </el-table>
      </div>
      <div class="w-1/4 h-1/3 bg-gray-50 rounded-3xl m-auto shadow-md">
        <h1 class="text-center text-2xl font-bold m-3">Add Word</h1>
        <el-form :model="add_word" label-width="auto" class="p-5">
          <el-form-item label="Name">
            <el-input v-model="add_word.name"></el-input>
          </el-form-item>
          <el-form-item label="Nature">
            <el-input v-model="add_word.nature"></el-input>
          </el-form-item>
          <el-form-item label="Trans">
            <el-input v-model="add_word.interpretation"></el-input>
          </el-form-item>
          <el-form-item label="Example">
            <el-input v-model="add_word.example"></el-input>
          </el-form-item>
        </el-form>
        <div class="flex justify-center">
          <el-button type="primary" @click="add_this_word">添加单词</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const search_word = ref("");
const words = reactive([
  {
    name: "work",
    nature: "n",
    interpretation: "工作",
    example:
      "Work, is not tired, but I feel tired, lack of sleep is always the feeling, coming back from work every time, greed will fall asleep.",
  },
]);

const add_word = reactive({
  name: "",
  nature: "",
  interpretation: "",
  example: "",
});
</script>
