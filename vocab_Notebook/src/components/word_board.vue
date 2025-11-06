<template>
  <div class="w-1/2 h-2/3 bg-gray-50 rounded-3xl m-auto shadow-md">
    <h1 class="text-center text-2xl font-bold m-3">Word Book</h1>
    <el-table :data="vocabs" border class="w-9/10! m-auto">
      <el-table-column label="WordName" prop="name" width="120"></el-table-column>
      <el-table-column label="Nature" prop="nature" width="80"></el-table-column>
      <el-table-column label="Trans" prop="interpretation" width="100"></el-table-column>
      <el-table-column label="Example" prop="example" max-width="400"></el-table-column>
      <el-table-column label="Operate" prop="Operation" width="90">
        <template #default="scope">
          <el-button type="danger" @click="deleteVocab(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useVocabStore } from "@/stores/vocabStore";

const vocabStore = useVocabStore();

const { vocabs } = storeToRefs(vocabStore);
const { deleteVocab } = vocabStore;
</script>
