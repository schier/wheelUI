<template>
  <div class="demo">
    <i-button>modal1234</i-button>
    <!-- <modal></modal> -->
    <div class="wh-modal-container">
      <div class="wh-modal-mask"></div>
      <div class="wh-modal-wrap">
        <div class="wh-modal wh-modal-transparent">
          <div class="wh-modal-content">
            <div class="wh-modal-hd">
              <div class="wh-modal-title">标题栏</div>
            </div>
            <div class="wh-modal-bd">
              内容区，输入说明文字！
            </div>
            <div class="wh-modal-ft">
              <!-- buttons -->
              <div class="wh-modal-button-group-h" role="group">
                <a class="wh-modal-button">取消</a>
                <a class="wh-modal-button">确定</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { iButton, Modal } from '@/components'
  export default {
    components: { iButton, Modal }
  }
</script>

<style lang="less" scoped>
@import "../src/style/modal";
.demo {
  padding: 20px;
}
</style>