<template>
  <div class="h-full w-full">
    <div class="w-full h-[10%] flex justify-between">
      <div class="w-1/6 h-full flex items-center pl-6">
        <el-input placeholder="搜索名字" v-model="name"></el-input>
      </div>
      <div class="w-1/6 h-full flex items-center">
        <el-input placeholder="搜索电话号码" v-model="PhoneNumber"></el-input>
      </div>
      <div class="w-4/7 h-full flex items-center">
        <el-button type="danger" @click="Search">搜索</el-button>
      </div>
    </div>
    <div class="w-full pl-10">
      <el-button type="danger" @click="addAccounts">添加账户</el-button>
    </div>
    <el-divider :direction="horizontal" :content-position="center"></el-divider>
    <div class="pl-10">
      <el-table :data="accounts" style="width: 100%">
        <el-table-column prop="avater" label="头像" width="180" />
        <el-table-column prop="information" label="信息" width="1440" />
        <el-table-column prop="character" label="职位" width="360" />
        <el-table-column prop="date" label="日期" />
        <el-table-column label="操作" width="100" fixed="right"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup></script>
