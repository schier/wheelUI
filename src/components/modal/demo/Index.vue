<template>
  <div class="demo">
    <i-button @click="testModal">testModal</i-button>
    <modal
      v-model="modal"
      title="Apple ID密码"
      :buttons="buttons1"><p>输入xxxx的密Apple ID密码来关闭查找我的iPhone<input type="number" name="number"></p></modal>
  </div>
</template>

<script>
  import { iButton, Modal } from '@/components'
  export default {
    components: { iButton, Modal },
    data () {
      return {
        modal: false,
        buttons1: [{
          label: '取消',
          onClick: function () {
            console.log('cancle!')
          }
        }, {
          label: '确认',
          onClick: function () {
            console.log('ok!')
          }
        }]
      }
    },
    methods: {
      testModal () {
        this.modal = true
        console.log(typeof this.buttons1[0].onClick === 'function')
        // this.$Modal.confirm({
        //   title: '标题栏',
        //   content: '<p>自定义内容吧，复杂的话需要定义下模板吧，如何定义？</p>'
        // })
      }
    }
  }
</script>

<style lang="less" scoped>
@import "../src/style/modal";
.demo {
  padding: 20px;
}
</style>