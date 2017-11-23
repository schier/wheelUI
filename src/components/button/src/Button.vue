<template>
  <button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
    <Icon type="load-c" v-if="loading"></Icon>
    <Icon :type="icon" v-if="icon && !loading"></Icon>
    <span><slot></slot></span>
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
        type: String,
        default: null
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
      inline: {
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
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-loading`]: this.loading != null && this.loading,
            [`${prefixCls}-inline`]: this.inline != null && this.inline,
            [`${prefixCls}-${this.size}`]: !!this.size
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