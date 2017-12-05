<template>
  <label :class="classes">
    <input :class="[prefixCls + '-input']" type="checkbox" :name="name" :checked="checked" :disabled="disabled" @change="onChange">
    <div :class="[prefixCls + '-checkbox']" :style="styles"></div>
  </label>
</template>

<script>
  import Emitter from '../../_utils/emitter'
  const prefixCls = 'wh-switch'
  export default {
    name: 'Switch',
    mixins: [ Emitter ],
    props: {
      value: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: null // [m, s]
      },
      color: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        prefixCls: prefixCls,
        checked: this.value
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-disabled`]: this.disabled,
            [`${prefixCls}-${this.size}`]: !!this.size
          }
        ]
      },
      styles () {
        let style = {}
        if (this.color && this.checked) {
          style.backgroundColor = this.color
          style.borderColor = this.color
        }
        return style
      }
    },
    methods: {
      onChange (e) {
        if (this.disabled) {
          return false
        }
        this.checked = e.target.checked
        this.$emit('input', this.checked)
        this.$emit('on-change', this.checked)
        this.dispatch('FormItem', 'on-form-change', this.checked)
      }
    },
    watch: {
      value (val) {
        this.checked = val
      }
    }
  }
</script>

<style lang="less">
  @import "./style/switch";
</style>