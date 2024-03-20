<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <!-- <TheHello></TheHello>
      <TheHello></TheHello>
      <TheHello></TheHello>
      <TheHello></TheHello>
      <TheHello></TheHello> -->
    </view>
  </view>
</template>

<script setup lang="ts">
import { hello } from "common";
hello("123");
hello("123");
hello("123");
console.log(`123`, typeof hello, hello());
import { openBlock, createElementBlock } from "vue";
console.log(`TheHello`, openBlock);
import { ref } from "vue";
const title = ref("Hello");
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
