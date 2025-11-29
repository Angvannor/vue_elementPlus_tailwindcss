<template>
  <div class="h-full w-full">
    <div class="w-full h-[10%] flex justify-between">
      <div class="w-1/6 h-full flex items-center pl-6">
        <h1 class="m-4 text-2xl">Name</h1>
        <el-input placeholder="Search for name" v-model="name"></el-input>
      </div>
      <div class="w-1/6 h-full flex items-center pl-2">
        <h1 class="m-4 text-2xl">PhoneNumber</h1>
        <el-input placeholder="Search for PhoneNumber " v-model="PhoneNumber"></el-input>
      </div>
      <div class="w-4/7 h-full flex items-center pl-2">
        <el-button type="danger" @click="Search">Search</el-button>
      </div>
    </div>
    <div class="w-full pl-10">
      <el-button type="danger" @click="addAccounts">Add Accounts</el-button>
    </div>
    <el-divider :direction="horizontal" :content-position="center"></el-divider>
    <div class="pl-10">
      <el-table :data="accounts" style="width: 100%">
        <el-table-column prop="avater" label="Avater" width="180" />
        <el-table-column prop="information" label="Information" width="1440" />
        <el-table-column prop="character" label="Character" width="360" />
        <el-table-column prop="date" label="Date" />
        <el-table-column label="操作" width="100" fixed="right"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup></script>
