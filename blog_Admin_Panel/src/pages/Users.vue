<template>
  <div class="h-full w-full">
    <div class="w-full h-[10%] flex justify-between">
      <div class="w-1/6 h-full flex items-center pl-6">
        <el-input placeholder="搜索名字" v-model="searchName"></el-input>
      </div>
      <div class="w-1/6 h-full flex items-center">
        <el-input placeholder="搜索电话号码" v-model="searchPhone"></el-input>
      </div>
      <div class="w-4/7 h-full flex items-center">
        <el-button type="danger" @click="Search">搜索</el-button>
      </div>
    </div>
    <div class="w-full pl-10">
      <el-button type="danger" @click="confirmAdd = true">添加账户</el-button>
    </div>
    <el-divider :direction="horizontal" :content-position="center"></el-divider>
    <div class="pl-10">
      <el-table :data="displayAccounts" style="width: 100%">
        <el-table-column prop="avatar" label="头像" width="180">
          <template #default="{ row }">
            <el-avatar :src="row.avatar" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="360" />
        <el-table-column prop="phone" label="电话" width="360" />
        <el-table-column prop="position" label="职位" width="360" />
        <el-table-column prop="date" label="日期" />
        <el-table-column label="操作" width="150" fixed="right">
          <template #default="{ row }">
            <el-button type="danger" size="small" @click="onDelete(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="w-1/3 h-1/2 rounded-2xl bg-gray-50 m-auto z-10" v-if="confirmAdd">
      <div class="w-full h-1/6 flex justify-end pr-6 pt-6">
        <el-button circle @click="confirmAdd = false">X</el-button>
      </div>
      <div class="w-full h-5/6 flex flex-col items-center">
        <div class="w-4/5 h-1/6">
          <el-input placeholder="用户名" v-model="userName" class="w-full!"></el-input>
        </div>
        <div class="w-4/5 h-1/6 mt-4">
          <el-input placeholder="电话号码" v-model="userPhone" class="w-full!"></el-input>
        </div>
        <div class="w-4/5 h-1/6 mt-4">
          <el-input placeholder="职位" v-model="position" class="w-full!"></el-input>
        </div>
        <div class="w-full h-1/3 flex justify-center items-center p-4">
          <el-button type="primary" @click="addUser">确认添加</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";
import { useUserManageStore } from "@/stores/counter";

const userManagement = useUserManageStore();
const { accounts } = storeToRefs(userManagement);
const { addAccount, deleteAccount, searchAccount } = userManagement;

const confirmAdd = ref(false);

// 搜索字段（与添加字段分离，避免冲突）
const searchName = ref("");
const searchPhone = ref("");

// 添加表单字段
const userName = ref("");
const userPhone = ref("");
const position = ref("");

// 计算显示的账户列表
const displayAccounts = computed(() => {
  if (searchName.value === "" && searchPhone.value === "") {
    return accounts.value;
  }
  return searchAccount(searchName.value, searchPhone.value);
});

// Search 按钮无需额外逻辑，计算属性会响应输入变化
const Search = () => {
  // 留空用于兼容按钮交互
};

// 添加用户
const addUser = () => {
  if (!userName.value || !userPhone.value || !position.value) {
    ElMessage.warning("请填写完整信息");
    return;
  }
  addAccount({
    name: userName.value,
    phone: userPhone.value,
    position: position.value,
  });
  userName.value = "";
  userPhone.value = "";
  position.value = "";
  confirmAdd.value = false;
};

// 删除用户（带确认）
const onDelete = (id) => {
  // 简单确认
  if (!window.confirm("确认删除该用户？")) return;
  deleteAccount(id);
};
</script>
