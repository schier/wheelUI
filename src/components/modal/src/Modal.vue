<template>
  <div v-transfer-dom :data-transfer="transfer">
    <transition :name="transitionNames[1]">
      <div :class="[prefixCls + '-mask']" v-show="visible" @click="mask"></div>
    </transition>
    <div :class="wrapClasses" @click="handleWrapClick">
      <transition :name="transitionNames[0]" @after-leave="animationFinish">
        <!-- <div class="wh-modal wh-modal-operation wh-modal-transparent"> -->
        <div :class="classes" v-show="visible">
          <div :class="[prefixCls + '-content']">
            <div :class="[prefixCls + '-hd']" v-if="showHead">
              <slot name="header"><div :class="[prefixCls + '-title']">{{ title }}</div></slot>
            </div>
            <div :class="[prefixCls + '-bd']"><slot></slot></div>
            <div :class="[prefixCls + '-ft']">
              <slot name="footer">
                <div :class="buttonGroupStyle">
                  <a href="javascript:"  :class="[prefixCls + '-button']" v-for="(button, key) in buttons" v-html="button.label" @click="onButtonClick(button, key)"></a>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Emitter from '../../_utils/emitter'
  import TransferDom from '../../_utils/transfer-dom'
  const prefixCls = 'wh-modal'
  export default {
    name: 'Modal',
    mixins: [ Emitter ],
    directives: { TransferDom },
    props: {
      value: { // 对话框是否显示，可使用 v-model 双向绑定数据
        type: Boolean,
        default: false
      },
      // closable: { // 是否显示右上角的关闭按钮
      //   type: Boolean,
      //   default: false
      // },
      maskClosable: { // 是否允许点击遮罩层关闭
        type: Boolean,
        default: true
      },
      title: { // 对话框标题，如果使用 slot 自定义了页头，则 title 无效
        type: String,
        default: ''
      },
      buttons: { // 按钮组，如果使用 slot 自定义了底部，则默认 footer 内容无效
        type: Array,
        default: () => []
      },
      transitionNames: { // 自定义显示动画，第一项是模态框，第二项是背景
        type: Array,
        default () {
          return ['ease', 'fade']
        }
      },
      transfer: {
        type: Boolean,
        default: true
      },
      operation: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        prefixCls: prefixCls,
        wrapShow: false,
        showHead: true,
        visible: this.value
      }
    },
    computed: {
      wrapClasses () {
        return [
          `${prefixCls}-wrap`,
          {
            [`${prefixCls}-hidden`]: !this.wrapShow
          }
        ]
      },
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-operation`]: !!this.operation
          }
        ]
      },
      buttonGroupStyle () {
        return this.buttons.length === 2
          ? `${prefixCls}-button-group-h`
          : `${prefixCls}-button-group-v`
      }
    },
    methods: {
      close () {
        this.visible = false
        this.$emit('input', false)
        this.$emit('on-cancel')
      },
      mask () {
        if (this.maskClosable) {
          this.close()
        }
      },
      handleWrapClick () {
        // use indexOf,do not use === ,because ivu-modal-wrap can have other custom className
        const className = event.target.getAttribute('class')
        if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.mask()
      },
      animationFinish () {
        this.$emit('on-hidden')
      },
      onButtonClick (button, key) {
        if (!button.disabled) {
          this.visible = false
          this.$emit('input', false)
        }
        this.$emit('button-click', button, key)
      }
    },
    watch: {
      value (val) {
        this.visible = val
      },
      visible (val) {
        if (val === false) {
          this.timer = setTimeout(() => {
            this.wrapShow = false
          }, 200)
        } else {
          if (this.timer) clearTimeout(this.timer)
          this.wrapShow = true
        }
        this.broadcast('Table', 'on-visible-change', val)
      },
      title (val) {
        if (this.$slots.header === undefined) {
          this.showHead = !!val
        }
      }
    },
    mounted () {
      if (this.visible) {
        this.wrapShow = true
      }

      let showHead = true
      if (this.$slots.header === undefined && !this.title) {
        showHead = false
      }
      this.showHead = showHead
    }
  }
</script>

<style lang="less">
  @import "./style/modal";
</style>