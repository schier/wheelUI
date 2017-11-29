<template>
  <div :class="classes" @click="handleClick">
    <div :class="[prefixCls + '-hd']">
      <slot name='hd'></slot>
    </div>
    <div :class="[prefixCls + '-bd']">
      <slot name='bd'></slot>
    </div>
    <div :class="[prefixCls + '-ft']">
      <slot name='ft'></slot>
    </div>
  </div>
</template>

<script>
  const prefixCls = 'wh-cell'
  export default {
    name: 'Cell',
    props: {
      isLink: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        prefixCls: prefixCls
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-access`]: !!this.isLink
          }
        ]
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