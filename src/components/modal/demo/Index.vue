<template>
  <div class="demo">
    <i-button>modal1234</i-button>
    <!-- <modal></modal> -->
    <div class="wh-modal-container" style="display:none">
      <div class="wh-modal-mask"></div>
      <div class="wh-modal-wrap">
        <div class="wh-modal wh-modal-transparent" style="display:none">
          <div class="wh-modal-content">
            <div class="wh-modal-hd">
              <div class="wh-modal-title">标题栏</div>
            </div>
            <div class="wh-modal-bd">
              内容区，输入说明文字！
            </div>
            <div class="wh-modal-ft">
              <!-- buttons -->
              <!-- <div class="wh-modal-button-group-h">
                <a class="wh-modal-button">取消</a>
                <a class="wh-modal-button">确定</a>
              </div> -->
              <div class="wh-modal-button-group-v">
                <a class="wh-modal-button">取消</a>
                <a class="wh-modal-button">确定</a>
              </div>
              <div class="wh-modal-button-group-v">
                <a class="wh-modal-button">取消</a>
                <a class="wh-modal-button">确定</a>
              </div>
            </div>
          </div>
        </div>
        <div class="wh-modal wh-modal-operation wh-modal-transparent">
          <div class="wh-modal-content">
            <div class="wh-modal-bd"></div>
            <div class="wh-modal-ft">
              <div class="wh-modal-button-group-v">
                <a class="wh-modal-button">标为未读</a>
                <a class="wh-modal-button">置顶聊天</a>
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