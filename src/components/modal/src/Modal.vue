<template>
  <div :class="[prefixCls + '-container']">
    <transition :name="transitionNames[1]">
      <div :class="[prefixCls + '-mask']" v-show="visible"></div>
    </transition>
    <div :class="[prefixCls + '-wrap']" v-show="visible">
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
                  <!-- <div v-for="(text, key) in menus" @click="onMenuClick(text, key)" v-html="$t(text.label || text)" :class="`vux-actionsheet-menu-${text.type || 'default'}`"> -->
                  <a class="wh-modal-button" v-for="(button, key) in buttons" v-html="button.label" @click="onButtonClick(button, key)"></a>
                  <!-- <a class="wh-modal-button">确定</a> -->
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
  const prefixCls = 'wh-modal'
  export default {
    name: 'Modal',
    props: {
      value: { // 对话框是否显示，可使用 v-model 双向绑定数据
        type: Boolean,
        default: false
      },
      // closable: { // 是否显示右上角的关闭按钮
      //   type: Boolean,
      //   default: false
      // },
      // maskClosable: { // 是否允许点击遮罩层关闭
      //   type: Boolean,
      //   default: true
      // },
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
      }
    },
    data () {
      return {
        prefixCls: prefixCls,
        showHead: true,
        visible: this.value
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          `${prefixCls}-transparent`
          // {
          //   [
          //     `${prefixCls}-transparent`
          //   ]
          // }
        ]
      },
      buttonGroupStyle () {
        return this.buttons.length > 2
          ? `${prefixCls}-button-group-v`
          : `${prefixCls}-button-group-h`
      }
    },
    methods: {
      animationFinish () {
        this.$emit('on-hidden')
      },
      onButtonClick (button, key) {
        if (!button.disabled && button.onClick && typeof button.onClick === 'function') {
          this.$emit('on-button-click', button.onClick, button)
          this.visible = false
        }
      }
    },
    watch: {
      value (val) {
        this.visible = val
      },
      visible (val) {
        this.$emit('Table', 'on-visible-change', val)
      }
    }
  }
</script>

<style lang="less">
  @import "./style/modal";
</style>