import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { ElMessage } from "element-plus";

export const useUserStore = defineStore("user", () => {
  const users = ref([]);

  const RegisterAccount = (data) => {
    for (let i = 0; i < users.value.length; i++) {
      if (users.value[i].username === data.username) {
        ElMessage({
          message: "用户名已存在",
          type: "error",
        });
        return false;
      }
    }
    users.value.push({
      username: data.username,
      password: data.password,
    });
    ElMessage({
      message: "注册成功",
      type: "success",
    });
    window.location.href = "/admin";
    return true;
  };

  const LoginAccount = (data) => {
    for (let i = 0; i < users.value.length; i++) {
      if (users.value[i].username === data.username && users.value[i].password === data.password) {
        ElMessage({
          message: "登录成功",
          type: "success",
        });
        return true;
      }
    }
    ElMessage({
      message: "用户名或密码错误",
      type: "error",
    });
    return false;
  };

  return { users, RegisterAccount, LoginAccount };
});

export const useBlogStore = defineStore("blog", () => {
  const posts = ref([]);

  const addPost = (data) => {
    posts.value.push({
      title: data.title,
      content: data.content,
      category: data.category,
    });
    ElMessage({
      message: "文章添加成功",
      type: "success",
    });
  };

  const searchPost = (keyword) => {
    const results = posts.value.filter(
      (post) =>
        post.title.includes(keyword) ||
        post.content.includes(keyword) ||
        post.category.includes(keyword)
    );
    return results;
  };

  return { posts, addPost, searchPost };
});

export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);

  const addCategory = (category) => {
    if (categories.value.includes(category)) {
      ElMessage({
        message: "类别已存在",
        type: "error",
      });
      return false;
    }
    categories.value.push(category);
    ElMessage({
      message: "类别添加成功",
      type: "success",
    });
    return true;
  };

  return { categories, addCategory };
});
