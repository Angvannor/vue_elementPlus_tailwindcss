<template>
  <div class="h-full w-full p-6">
    <div class="flex justify-between mb-4">
      <div class="w-[30%] flex gap-4">
        <el-input v-model="searchKeyword" placeholder="搜索文章标题或内容" class="w-64" clearable />
        <el-select v-model="searchCategory" placeholder="全部分类" class="w-32">
          <el-option label="全部" value="全部" />
          <el-option
            v-for="category in categories"
            :key="category.name"
            :label="category.name"
            :value="category.name"
          />
        </el-select>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </div>
      <el-button type="success" @click="dialogVisible = true">发布文章</el-button>
    </div>

    <el-divider />

    <el-table :data="displayPosts" style="width: 100%" height="calc(100% - 100px)">
      <el-table-column prop="title" label="标题" width="200" />
      <el-table-column prop="category" label="分类" width="100">
        <template #default="{ row }">
          <el-tag>{{ row.category }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="content" label="内容摘要" show-overflow-tooltip />
      <el-table-column prop="date" label="发布时间" width="180" />
      <el-table-column label="状态" width="100">
        <template #default="{ row }">
          <el-tag :type="row.status === '已发布' ? 'success' : 'info'">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100" fixed="right">
        <template #default="{ row }">
          <el-button type="danger" size="small" @click="handleDelete(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="发布新文章" v-model="dialogVisible" width="50%">
      <el-form :model="newPost" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="newPost.title" placeholder="请输入文章标题" />
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="newPost.category" placeholder="请选择分类">
            <el-option
              v-for="category in categories"
              :key="category.name"
              :label="category.name"
              :value="category.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="newPost.status">
            <el-radio label="已发布">直接发布</el-radio>
            <el-radio label="草稿">存为草稿</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            v-model="newPost.content"
            type="textarea"
            :rows="6"
            placeholder="请输入文章内容"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitPost">确定发布</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useBlogStore } from "@/stores/counter";
import { useCategoryStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";

const blogStore = useBlogStore();
const { posts } = storeToRefs(blogStore);
const { addPost, deletePost } = blogStore;

const categoryStore = useCategoryStore();
const { categories } = storeToRefs(categoryStore);

// 搜索状态
const searchKeyword = ref("");
const searchCategory = ref("全部");

// 弹窗状态
const dialogVisible = ref(false);
const newPost = ref({
  title: "",
  category: "技术",
  status: "已发布",
  content: "",
});

// 计算属性：根据搜索条件过滤文章
const displayPosts = computed(() => {
  return posts.value.filter((post) => {
    const matchKeyword =
      !searchKeyword.value ||
      post.title.includes(searchKeyword.value) ||
      post.content.includes(searchKeyword.value);
    const matchCategory = searchCategory.value === "全部" || post.category === searchCategory.value;
    return matchKeyword && matchCategory;
  });
});

// 搜索按钮（其实 computed 已经自动处理了，这里仅作为占位）
const handleSearch = () => {
  // 自动响应
};

// 提交文章
const submitPost = () => {
  if (!newPost.value.title || !newPost.value.content) {
    ElMessage.warning("标题和内容不能为空");
    return;
  }
  addPost({ ...newPost.value });
  // 重置表单
  newPost.value = {
    title: "",
    category: "技术",
    status: "已发布",
    content: "",
  };
  dialogVisible.value = false;
};

// 删除文章
const handleDelete = (id) => {
  if (confirm("确认删除这篇文章吗？")) {
    deletePost(id);
  }
};
</script>
