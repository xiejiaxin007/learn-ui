<!--
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2022-02-23 16:05:34
 * @desc: 参考：https://juejin.cn/post/7006108454028836895
-->
<template>
<div class="container">
  <div class="source">
    <div class="item">
      <xie-button size="default">正常按钮</xie-button>
      <xie-button size="default" type="primary">正常按钮</xie-button>
      <xie-button size="default" type="success">正常按钮</xie-button>
    </div>
    <div class="item">
      <xie-button size="default" plain>朴素按钮</xie-button>
      <xie-button size="default" type="primary" plain>朴素按钮</xie-button>
      <xie-button size="default" type="success" plain>朴素按钮</xie-button>
    </div>
    <div class="item">
      <xie-button size="default" round>圆角按钮</xie-button>
      <xie-button size="default" type="primary" round>圆角按钮</xie-button>
      <xie-button size="default" type="success" round>圆角按钮</xie-button>
    </div>
    <div class="item">
      <xie-button size="default" circle>
        <template v-slot:icon>
          <i class="icon iconfont iconsearch"></i>
        </template>
      </xie-button>
    </div>
    <div class="item">
      <xie-button size="default" disabled>禁用</xie-button>
    </div>
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
