<script setup>
import { ref } from "vue";
import { Timer } from "@element-plus/icons-vue";

const value = ref();
const name = ref("");

const getTime = () => {
  // 修复：这里应该打印 value.value
  console.log("Time selected:", value.value);
};

// 新增：添加一个空的 addTask 函数，防止点击按钮时报错
const addTask = () => {
  console.log("Task added:", name.value);
};
</script>

<template>
  <div class="h-screen flex relative overflow-hidden" id="star-scene">
    <div class="stars" id="stars-small"></div>
    <div class="stars" id="stars-medium"></div>
    <div class="stars" id="stars-large"></div>

    <div class="w-1/4 h-2/3 m-auto shadow-lg rounded-2xl bg-white relative z-10">
      <h1 class="text-3xl text-center font-bold m-5">
        <el-icon><Timer /></el-icon>Pomodoro
      </h1>
      <div class="w-[90%] m-auto">
        <el-divider direction="horizontal" content-position="center"></el-divider>
      </div>
      <div class="w-4/5 h-1/2 m-auto p-2 shadow-lg rounded-2xl"></div>
      <div class="w-[90%] m-auto">
        <el-divider direction="horizontal" content-position="center"></el-divider>
      </div>
      <div class="w-4/5 h-1/3 m-auto p-2 shadow-lg rounded-2xl">
        <div class="w-[90%] m-auto">
          <h1 class="text-left text-xl font-bold">Task Add</h1>
          <el-divider direction="horizontal" content-position="center"></el-divider>
        </div>
        <div class="w-4/5 m-auto">
          <el-input placeholder="add a task" v-model="name"></el-input>
          <el-time-picker
            v-model="value"
            value-format="HH:mm:ss"
            placeholder="预计任务时长"
            clearable
            @change="getTime"
            class="w-full! mt-2"
          ></el-time-picker>
          <div class="flex mt-2">
            <el-button type="primary" @click="addTask" class="m-auto">开始倒计时</el-button>
          </div>
          <h1 class="text-center mt-2">预计在...完成</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#star-scene {
  background-color: #024;
}

.stars {
  position: absolute;
  top: 50%;
  left: 50%;
  background: transparent;
  border-radius: 50%;
}

#stars-small {
  width: 1px;
  height: 1px;
  margin-top: -1000px;
  margin-left: -1000px;
  box-shadow: 1543px 1475px #fff, 1332px 1404px #fff, 1923px 1749px #fff, 936px 746px #fff,
    1191px 1708px #fff, 350px 188px #fff, 198px 1609px #fff, 1695px 1018px #fff, 44px 176px #fff,
    715px 1239px #fff, 1686px 1582px #fff, 1078px 1563px #fff, 1009px 406px #fff, 856px 635px #fff,
    1249px 1236px #fff, 1530px 602px #fff, 1343px 1338px #fff, 835px 1050px #fff, 810px 1793px #fff,
    110px 1642px #fff;
}

#stars-medium {
  width: 2px;
  height: 2px;
  margin-top: -1000px;
  margin-left: -1000px;
  box-shadow: 1726px 1709px #fff, 1656px 76px #fff, 170px 1078px #fff, 1500px 348px #fff,
    141px 1318px #fff, 1640px 181px #fff, 1346px 1190px #fff, 1553px 433px #fff, 160px 1303px #fff,
    1658px 112px #fff, 1905px 404px #fff, 638px 109px #fff;
}

#stars-large {
  width: 3px;
  height: 3px;
  margin-top: -1000px;
  margin-left: -1000px;
  box-shadow: 1221px 1137px #fff, 553px 148px #fff, 1668px 1056px #fff, 1929px 1730px #fff,
    1100px 105px #fff, 1011px 47px #fff, 1237px 1104px #fff, 906px 451px #fff, 1069px 74px #fff;
}
</style>
