<template>
  <!-- aria-hidden: 让这个元素对浏览器隐藏 -->
  <svg :class="svgClass" :style="{ color, width, height }" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  className: String,
  color: String,
  width: String,
  height: String,
  size: String | Number
})

// 判断传入的值，是否带有单位，如果没有，就默认用px单位
const getUnitValue = (value) => {
  return /(px|em|rem|%)$/.test(value.toString()) ? value : value + 'px'
}

const iconSize = computed(() => {
  return getUnitValue(props.size)
})


const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  let className = props.className ? `icon-${props.className}` : '';
  return ['svg-icon', className]
})

</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1.3em;
  height: 1.3em;
  vertical-align: -0.3em;
  fill: currentColor;
  overflow: hidden;
}
</style>
