<script setup lang="ts">
import { ref } from "vue";

import axios from "@/common/axios";

const testServer = ref<string>("");
const test = async () => {
  return await axios.get("/test").then((res) => {
    console.log(res.data.message);
    testServer.value = res.data.message;
    return res.data.message;
  });
};

test();
</script>

<template>
  <div class="main-container">
    {{ testServer }}
  </div>
</template>

<style scoped></style>
