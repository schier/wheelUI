<template>
  <div class="demo">
    <i-button type="primary" @click="testModal3">alert</i-button>
    <i-button type="primary" @click="testModal">confirm</i-button>
    <i-button type="primary" @click="testModal2">operation</i-button>
    <i-button type="primary" @click="testModal">input</i-button>
    <modal
      v-model="modal"
      :mask-closable="false"
      :buttons="buttons1" @button-click="clickTest">
      <p>输入xxxx的密Apple ID密码来关闭查找我的iPhone<input type="number" name="number"></p>
    </modal>
    <modal
      v-model="modal2"
      operation
      :buttons="buttons2">
    </modal>
    <modal
      v-model="modal3"
      title="标题"
      :buttons="buttons3">
      <p>输入xxxx的密Apple ID密码来关闭查找我的iPhone<input type="number" name="number"></p>
    </modal>
  </div>
</template>

<script>
  import { iButton, Modal } from '@/components'
  export default {
    components: { iButton, Modal },
    data () {
      return {
        modal: false,
        modal2: false,
        modal3: false,
        buttons1: [{
          label: '取消'
        }, {
          label: '确认'
        }],
        buttons2: [{
          label: '标为未读'
        }, {
          label: '置顶消息'
        }, {
          label: '分享给朋友'
        }],
        buttons3: [{
          label: '1'
        }]
      }
    },
    methods: {
      testModal () {
        this.modal = true
      },
      testModal2 () {
        this.modal2 = true
      },
      testModal3 () {
        this.modal3 = true
      },
      clickTest (item, key) {
        console.log(item, key)
        if (item.label === '取消') {
          this.click1()
        } else {
          this.click2()
        }
      },
      click1 () {
        console.log('cancel!')
      },
      click2 () {
        console.log('ok!')
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