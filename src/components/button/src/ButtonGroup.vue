<template>
  <div class="wh-cell-group">
    <div class="wh-cell-title" v-if="title">{{ title }}</div>
    <div class="wh-cells">
      <slot></slot>
    </div>
    <div class="wh-cell-tips" v-if="tips">{{ tips }}</div>
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
