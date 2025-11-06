<template>
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
</template>

<script setup>
import { reactive } from "vue";
import { ElMessage } from "element-plus";

import { useVocabStore } from "@/stores/vocabStore";

const vocabStore = useVocabStore();

const add_word = reactive({
  name: "",
  nature: "",
  interpretation: "",
  example: "",
});

const add_this_word = () => {
  const success = vocabStore.addVocab(add_word);

  if (success) {
    ElMessage({ message: "单词添加成功", type: "success" });
    add_word.name = "";
    add_word.nature = "";
    add_word.interpretation = "";
    add_word.example = "";
  } else {
    ElMessage.warning("添加内容不能为空");
    add_word.name = "";
    add_word.nature = "";
    add_word.interpretation = "";
    add_word.example = "";
  }
};
</script>
