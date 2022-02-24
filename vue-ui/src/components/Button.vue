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
    default: 'primary'
  }
})
</script>

<style scoped>
.xjx-ui {
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #ccc;
  line-height: 1;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}
.xjx-ui:hover {
  color: #409eff;
  border-color: #409eff;
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
</style>
