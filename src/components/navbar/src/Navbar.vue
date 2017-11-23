<template>
  <div :class="classes">
    <div class="wh-navbar-hd">
      <slot name="hd"></slot>
    </div>
    <div class="wh-navbar-bd">
      <slot name="bd"></slot>
    </div>
    <div class="wh-navbar-ft">
      <slot name="ft"></slot>
    </div>
  </div>
</template>

<script>
  const prefixCls = 'wh-navbar'
  export default {
    name: 'Navbar',
    props: {
      prefixCls: prefixCls,
      mode: {
        type: String,
        default: 'dark' // ['dark', 'light']
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.mode}`]: !!this.mode
          }
        ]
      }
    }
  }
</script>

<style lang="less">
@import "./style/navbar";
</style>