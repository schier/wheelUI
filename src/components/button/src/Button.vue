<template>
  <button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
    <!-- <Icon class="ivu-load-loop" type="load-c" v-if="loading"></Icon> -->
    <Icon :type="icon" v-if="icon && !loading"></Icon>
    <!-- <span v-if="showSlot" ref="slot"><slot></slot></span> -->
    <span ref="slot"><slot></slot></span>
  </button>
</template>

<script>
  import Icon from '../../icon'

  const prefixCls = 'wh-btn'

  export default {
    name: 'iButton',
    components: { Icon },
    props: {
      size: {
        type: [Number, String],
        default: 24
      },
      type: {
        type: String,
        default: 'default' // ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default']
      },
      htmlType: {
        type: String,
        default: 'button'
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: String
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: !!this.type
          }
        ]
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>

<style lang="less">
@import "./style/button";
</style>