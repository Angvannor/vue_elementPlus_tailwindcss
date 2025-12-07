<template>
  <div class="h-full w-full p-6 bg-gray-50">
    <div class="bg-white p-4 rounded-lg shadow-sm h-full flex flex-col">
      <div class="flex justify-between items-center mb-4">
        <div class="flex gap-4">
          <el-input
            v-model="searchName"
            placeholder="搜索姓名"
            prefix-icon="Search"
            class="w-48"
            clearable
          />
          <el-input
            v-model="searchPhone"
            placeholder="搜索电话"
            prefix-icon="Phone"
            class="w-48"
            clearable
          />
        </div>
        <el-button type="success" @click="confirmAdd = true">
          <el-icon class="mr-1"><UserFilled /></el-icon>添加用户
        </el-button>
      </div>

      <el-table :data="displayAccounts" style="width: 100%" class="flex-grow" height="100%">
        <el-table-column prop="avatar" label="头像" width="100" align="center">
          <template #default="{ row }">
            <el-avatar :src="row.avatar" shape="square" size="small" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" sortable />
        <el-table-column prop="phone" label="电话号码" width="200" />
        <el-table-column prop="position" label="职位/角色" width="180">
          <template #default="{ row }">
            <el-tag type="info">{{ row.position }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="注册日期" sortable />
        <el-table-column label="操作" width="150" align="center" fixed="right">
          <template #default="{ row }">
            <el-button type="danger" size="small" icon="Delete" @click="onDelete(row.id)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="添加新用户" v-model="confirmAdd" width="30%">
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="userName" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="userPhone" placeholder="请输入电话号码" />
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="position" placeholder="例如：编辑、管理员" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="confirmAdd = false">取消</el-button>
          <el-button type="primary" @click="addUser">确认添加</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { ElMessage, ElMessageBox } from "element-plus";
import { useUserManageStore } from "@/stores/counter";
import { Search, Phone, UserFilled, Delete } from "@element-plus/icons-vue";

const userManagement = useUserManageStore();
const { accounts } = storeToRefs(userManagement);
const { addAccount, deleteAccount, searchAccount } = userManagement;

const confirmAdd = ref(false);

// 搜索字段
const searchName = ref("");
const searchPhone = ref("");

// 添加表单字段
const userName = ref("");
const userPhone = ref("");
const position = ref("");

// 计算显示的账户列表
const displayAccounts = computed(() => {
  if (!searchName.value && !searchPhone.value) {
    return accounts.value;
  }
  return searchAccount(searchName.value, searchPhone.value);
});

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
  // 重置表单
  userName.value = "";
  userPhone.value = "";
  position.value = "";
  confirmAdd.value = false;
};

// 删除用户
const onDelete = (id) => {
  ElMessageBox.confirm("确认删除该用户吗？此操作无法撤销。", "警告", {
    confirmButtonText: "删除",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    deleteAccount(id);
  });
};
</script>
