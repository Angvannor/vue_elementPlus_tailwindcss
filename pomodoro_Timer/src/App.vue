<script setup>
import { ref, onUnmounted } from "vue";
import { Timer } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

const value = ref();

const taskName = ref("");
const startTime = ref(null);
const endTime = ref(null);

const duringTime = ref("00:00:00");
const isRunning = ref(false);
const durationInSeconds = ref(0);
let timeId = null;

onUnmounted(() => {
  if (timeId) {
    clearInterval(timeId);
  }
});

const formatTime = (totalSeconds) => {
  if (totalSeconds < 0) return "00:00:00";

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num) => String(num).padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

const timeToSeconds = (timeStr) => {
  if (!timeStr) return 0;

  const parts = timeStr.split(":");

  const hours = parseInt(parts[0]) || 0;
  const minutes = parseInt(parts[1]) || 0;
  const seconds = parseInt(parts[2]) || 0;

  return hours * 3600 + minutes * 60 + seconds;
};

const secondsToTimeStr = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((n) => String(n).padStart(2, "0")).join(":");
};

const computeEndTimeFromNow = (secondsAhead) => {
  const now = new Date();
  now.setSeconds(now.getSeconds() + secondsAhead);
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
};

const startTimer = () => {
  if (timeId) clearInterval(timeId);

  const tick = () => {
    if (typeof durationInSeconds.value !== "number") return;
    duringTime.value = formatTime(durationInSeconds.value);

    if (durationInSeconds.value <= 0) {
      if (timeId) {
        clearInterval(timeId);
        timeId = null;
      }
      isRunning.value = false;
      taskName.value = "";
      duringTime.value = "00:00:00";
      ElMessage.success("倒计时结束");
      return true;
    }
    return false;
  };

  tick();

  timeId = setInterval(() => {
    durationInSeconds.value--;

    duringTime.value = formatTime(durationInSeconds.value);

    tick();
  }, 1000);

  isRunning.value = true;
};

const stopTimer = () => {
  if (isRunning.value) {
    if (timeId) {
      clearInterval(timeId);
      timeId = null;
    }
    isRunning.value = false;

    endTime.value = computeEndTimeFromNow(durationInSeconds.value);

    ElMessage.info("已暂停，预计完成时间已更新");
  } else {
    startTimer();
    endTime.value = computeEndTimeFromNow(durationInSeconds.value);
    ElMessage.success("继续倒计时");
  }
};

const addTask = () => {
  if (!startTime.value || !endTime.value) {
    ElMessage.warning("请设置任务的开始时间和预计完成时间！");
    return;
  }

  const startTotalSeconds = timeToSeconds(startTime.value);
  const endTotalSeconds = timeToSeconds(endTime.value);

  const totalDuration = endTotalSeconds - startTotalSeconds;

  if (totalDuration <= 0) {
    ElMessage.warning("预计完成时间必须晚于开始时间！");
    return;
  }

  durationInSeconds.value = totalDuration;
  isRunning.value = true;

  startTimer();
};
</script>

<template>
  <div class="h-screen flex relative overflow-hidden bg-[#024]">
    <div class="w-1/4 h-2/3 m-auto shadow-lg rounded-2xl bg-white relative z-10">
      <h1 class="text-3xl text-center font-bold m-5">
        <el-icon><Timer /></el-icon>Pomodoro
      </h1>
      <div class="w-[90%] m-auto">
        <el-divider direction="horizontal" content-position="center"></el-divider>
      </div>
      <div class="w-4/5 h-1/2 m-auto p-2 shadow-lg rounded-2xl bg-gray-50">
        <div class="w-4/5 h-1/5 p-5 m-auto">
          <h1 class="text-center font-bold text-2xl">{{ taskName || "无备注" }}</h1>
        </div>
        <div class="w-4/5 h-2/5 p-10">
          <h1 class="text-center font-bold text-9xl">{{ duringTime }}</h1>
        </div>
        <div class="w-1/2 h-1/4 m-auto">
          <el-button
            type="primary"
            @click="stopTimer"
            class="w-full! h-1/2! text-3xl! font-bold! rounded-2xl!"
            >{{ isRunning ? "暂停" : "继续" }}</el-button
          >
        </div>
        <div
          class="w-[90%] h-1/10 inset-shadow-sm inset-shadow-gray-300 rounded-2xl m-auto bg-gray-100 p-4"
        >
          <h1 class="text-center font-bold m-auto">预计在{{ endTime }}完成</h1>
        </div>
      </div>

      <div class="w-[90%] m-auto">
        <el-divider direction="horizontal" content-position="center"></el-divider>
      </div>

      <div class="w-4/5 h-1/3 m-auto p-5 shadow-lg rounded-2xl bg-gray-50">
        <div class="w-[90%] m-auto">
          <h1 class="text-left text-xl font-bold">Task Add</h1>
          <el-divider direction="horizontal" content-position="center"></el-divider>
        </div>
        <div class="w-4/5 h-4/5 m-auto">
          <el-input placeholder="添加任务名称" v-model="taskName"></el-input>
          <div class="mb-10">
            <el-time-picker
              v-model="startTime"
              value-format="HH:mm:ss"
              placeholder="任务开始时间"
              clearable
              class="mt-2 mr-9.5"
            ></el-time-picker>
            <el-time-picker
              v-model="endTime"
              value-format="HH:mm:ss"
              placeholder="预计完成时间"
              clearable
              class="mt-2"
            ></el-time-picker>
          </div>
          <div class="mt-5 w-1/2 h-1/4 m-auto">
            <el-button
              type="primary"
              @click="addTask"
              class="m-auto w-full! h-full! font-bold! text-3xl! rounded-2xl!"
              >开始倒计时</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
