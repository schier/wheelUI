<template>
  <div class="demo">
    <h3>popover</h3>
    <div class="wh-popover-wrap">
      <div class="wh-popover-mask"></div>
      <div class="wh-popover-rel"><slot>按钮</slot></div>
      <transition name="fade">
        <div class="wh-popover">
          <div class="wh-popover-arrow"></div>
          <div class="wh-popover-inner">
            <p style="padding:10px;">Poptip 气泡提示</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { Popover } from '@/components'
  export default {
    components: { Popover },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
@import "../src/style/popover";
.demo {
  padding: 20px;
}
h3 {
  margin-bottom: 20px;
}
</style>