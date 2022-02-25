<!--
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2022-02-24 16:41:45
 * @desc: 按钮组件
-->
<template>
  <div class="xjx-ui" :class="[size + '--size', type + '--type']">这是一个按钮</div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: {
    type: String,
    default: 'default'
  },
  // primary / success / warning / danger / info / text
  type: {
    type: String,
    default: 'default'
  }
})
</script>

<style scoped>
.xjx-ui {
  display: inline-block;
  margin-right: 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  line-height: 1;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}
.default--size {
  padding: 10px 12px;
}
.small--size {
  padding: 8px 10px;
}
.large--size {
  padding: 12px 14px;
}
.default--type {
  color: #606266;
  border-color: #ccc;
  background-color: #fff;
}
.default--type:hover {
  color: #409eff;
  border-color: #409eff;
}
.primary--type {
  color: #fff;
  border-color: #409eff;
  background-color: #409eff;
}
.primary--type:hover {
  color: #fff;
  border-color: #66b1ff;
  background-color: #66b1ff;
}
</style>
