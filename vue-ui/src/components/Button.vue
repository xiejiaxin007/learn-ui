<!--
 * @description: 
 * @author: xiejiaxin
 * @e-mail: xiejx@glodon.com
 * @Date: 2022-02-24 16:41:45
 * @desc: 按钮组件
-->
<template>
    <div class="xjx-ui"
        :class="[size + '--size', type + '--type', {
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle,
          'is-disabled': disabled
        }]">
        <slot></slot>
        <slot name="icon"></slot>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    size: {
        type: String,
        default: 'default',
    },
    // primary / success / warning / danger / info / text
    type: {
        type: String,
        default: 'default',
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean
});
</script>

<style scoped>
.xjx-ui {
    display: inline-block;
    margin: 0 5px;
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
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.default--type.is-disabled {
    color: #c0c4cc;
    border-color: #ebeef5;
    background-color: #fff;
    cursor: not-allowed;
}
.default--type.is-circle {
    color: #606266;
    border-color: #dcdfe6;
    background-color: #fff;
    border-radius: 50%;
}
.default--type.is-plain {
    color: #606266;
    border-color: #dcdfe6;
    background-color: #fff;
}
.default--type.is-plain:hover {
    color: #409eff;
    border-color: #409eff;
}
.default--type.is-circle:hover {
    color: #409eff;
    border-color: #409eff;
}
.default--type.is-round {
    color: #606266;
    border-color: #dcdfe6;
    background-color: #fff;
    border-radius: 18px;
}
.default--type.is-round:hover {
    color: #409eff;
    border-color: #409eff;
}
.primary--type {
    color: #fff;
    border-color: #409eff;
    background-color: #409eff;
}
.primary--type.is-plain {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.primary--type.is-round {
    color: #fff;
    border-color: #409eff;
    background-color: #409eff;
    border-radius: 18px;
}
.primary--type:hover {
    color: #fff;
    border-color: #66b1ff;
    background-color: #66b1ff;
}
.primary--type.is-plain:hover {
    color: #fff;
    border-color: #409eff;
    background-color: #409eff;
}
.success--type {
    color: #fff;
    border-color: #67c23a;
    background-color: #67c23a;
}
.success--type.is-plain {
    color: #67c23a;
    border-color: #c2e7b0;
    background-color: #f0f9eb;
}
.success--type.is-round {
    color: #fff;
    border-color: #67c23a;
    background-color: #67c23a;
    border-radius: 18px;
}
.success--type:hover {
    color: #fff;
    border-color: #85ce61;
    background-color: #85ce61;
}
.success--type.is-plain:hover {
    color: #fff;
    border-color: #67c23a;
    background-color: #67c23a;
}
</style>
