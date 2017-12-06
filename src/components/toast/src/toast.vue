<template>
  <div :class="[prefixCls + '-wrap']">
    <div :class="[prefixCls + '-mask']"></div>
    <div :class="classes">
      <!-- <icon></icon> -->
      <p :class="[prefixCls + '-content']">成功</p>
    </div>
  </div>
</template>

<script>
  const prefixCls = 'wh-toast'
  export default {
    name: 'Toast',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: null // [m, s]
      },
      color: {
        type: String,
        default: null
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
            [`${prefixCls}-disabled`]: this.disabled,
            [`${prefixCls}-${this.size}`]: !!this.size
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  @import "./style/toast";
</style>