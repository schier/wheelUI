<template>
  <div class="wh-cell" :class="access" @click="handleClick">
    <div class="wh-cell-hd">
      <slot name='hd'></slot>
    </div>
    <div class="wh-cell-bd">
      <slot name='bd'></slot>
    </div>
    <div class="wh-cell-ft">
      <slot name='ft'></slot>
    </div>
  </div>
</template>

<script>
  // const prefixCls = 'wh-cell'
  export default {
    name: 'Cell',
    props: {
      isLink: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {}
    },
    computed: {
      access () {
        if (this.isLink) return 'wh-cell-access'
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>

<style lang="less">
@import "./style/cell";
</style>