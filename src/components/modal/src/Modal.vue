<template>
  <div class="wh-modal-container">
    <div class="wh-modal-mask"></div>
    <div class="wh-modal-wrap">
      <div class="wh-modal wh-modal-transparent1">
        <div class="wh-modal-content">
          <div class="wh-modal-hd">1</div>
          <div class="wh-modal-bd">2</div>
          <div class="wh-modal-ft">
            333
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // const prefixCls = 'wh-modal'
  export default {
    name: 'Modal',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      maskClosable: {
        type: Boolean,
        default: true
      }
    },
    computed: {

    }
  }
</script>

<style lang="less">
  @import "./style/modal";
</style>