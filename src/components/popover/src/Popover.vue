<template>
  <div :class="[prefixCls + '-wrap']">
    <div :class="[prefixCls + '-rel']"><slot></slot></div>
    <transition name="fade">
      <div :class="prefixCls">
        <div :class="[prefixCls + '-arrow']"></div>
        <div :class="[prefixCls + '-inner']">
          Poptip 气泡提示
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  const prefixCls = 'wh-popover'
  export default {
    name: 'Popover',
    props: {

    },
    data () {
      return {
        prefixCls: prefixCls
      }
    }
  }
</script>

<style lang="less">
  @import "./style/popover";
</style>