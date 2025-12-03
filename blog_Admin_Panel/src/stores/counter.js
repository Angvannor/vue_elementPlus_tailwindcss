import { ref } from "vue";
import { defineStore } from "pinia";
import { ElMessage } from "element-plus";

// 用户信息存储与管理
export const useUserStore = defineStore("user", () => {
  const users = ref(JSON.parse(localStorage.getItem("users") || "[]"));

  const RegisterAccount = (data) => {
    // 修正拼写并校验密码
    if (data.password !== data.confirmPassword) {
      ElMessage({ message: "两次输入的密码不一致", type: "error" });
      return false;
    }
    for (let i = 0; i < users.value.length; i++) {
      if (users.value[i].username === data.username) {
        ElMessage({ message: "用户名已存在", type: "error" });
        return false;
      }
    }
    users.value.push({ username: data.username, password: data.password });
    localStorage.setItem("users", JSON.stringify(users.value));
    ElMessage({ message: "注册成功", type: "success" });
    return true;
  };

  const LoginAccount = (data) => {
    for (let i = 0; i < users.value.length; i++) {
      if (users.value[i].username === data.username && users.value[i].password === data.password) {
        localStorage.setItem("currentUser", data.username);
        ElMessage({ message: "登录成功", type: "success" });
        return true;
      }
    }
    ElMessage({ message: "用户名或密码错误", type: "error" });
    return false;
  };

  return { users, RegisterAccount, LoginAccount };
});

// 文章和类别存储与管理
export const useBlogStore = defineStore("blog", () => {
  const posts = ref(JSON.parse(localStorage.getItem("posts") || "[]"));

  const addPost = (data) => {
    posts.value.push({
      id: Date.now(),
      title: data.title,
      content: data.content,
      category: data.category,
      status: data.status,
      date: new Date().toLocaleString(),
    });
    localStorage.setItem("posts", JSON.stringify(posts.value));
    ElMessage({ message: "文章添加成功", type: "success" });
  };

  const deletePost = (postId) => {
    posts.value = posts.value.filter((post) => post.id !== postId);
    localStorage.setItem("posts", JSON.stringify(posts.value));
    ElMessage({ message: "文章删除成功", type: "success" });
  };

  const searchPost = (data) => {
    return posts.value.filter(
      (post) =>
        (data.keyword === "" ||
          post.title.includes(data.keyword) ||
          post.content.includes(data.keyword)) &&
        (data.category === "全部" || post.category === data.category) &&
        (data.status === "全部" || post.status === data.status)
    );
  };

  return { posts, addPost, deletePost, searchPost };
});

// 用户管理（Users 页面使用的 store）
export const useUserManageStore = defineStore("userManage", () => {
  const accounts = ref(JSON.parse(localStorage.getItem("accounts") || "[]"));

  const addAccount = (user) => {
    accounts.value.push({
      id: Date.now(),
      name: user.name,
      phone: user.phone,
      position: user.position,
      date: new Date().toLocaleDateString(),
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    });
    localStorage.setItem("accounts", JSON.stringify(accounts.value));
    ElMessage({ message: "用户添加成功", type: "success" });
  };

  const deleteAccount = (id) => {
    accounts.value = accounts.value.filter((u) => u.id !== id);
    localStorage.setItem("accounts", JSON.stringify(accounts.value));
    ElMessage({ message: "用户删除成功", type: "success" });
  };

  const searchAccount = (name, phone) => {
    return accounts.value.filter(
      (user) =>
        (name === "" || user.name.includes(name)) && (phone === "" || user.phone.includes(phone))
    );
  };

  return { accounts, addAccount, deleteAccount, searchAccount };
});
