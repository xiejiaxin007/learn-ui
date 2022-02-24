<!--
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2022-02-23 16:05:34
 * @desc: 参考：https://juejin.cn/post/7006108454028836895
-->
<template>
  <div class="source">
    <div class="item">
      <xie-button size="small" />
    </div>
    <div class="item">
      <xie-button size="default" />
    </div>
    <div class="item">
      <xie-button size="large" />
    </div>
  </div>
</template>

<script setup>
import { XieButton } from './components/index.js';
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.source {
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 2px 2px salmon;
  text-align: left;
}
.item {
  margin-bottom: 14px;
}
</style>
