<template>
  <div class="wh-cell-group">
    <div class="wh-cell-title">{{ title }}</div>
    <div class="wh-cells">
      <slot></slot>
    </div>
    <div class="wh-cell-tips">{{ tips }}</div>
  </div>
</template>

<script>
  export default {
    name: 'CellGroup',
    props: {
      title: String,
      tips: String
    },
    data () {
      return {}
    }
  }
</script>
