<template>
  <span v-if="dot" :class="classes" ref="badge">
    <slot></slot>
    <sup :class="dotClasses" v-show="badge"></sup>
  </span>
  <span v-else :class="classes" ref="badge">
    <slot></slot>
    <sup v-if="count" :class="countClasses" v-show="badge">{{ finalCount }}</sup>
  </span>
</template>

<script>
  const prefixCls = 'wh-badge'
  export default {
    name: 'Badge',
    props: {
      count: [Number, String],
      dot: {
        type: Boolean,
        default: false
      },
      maxCount: {
        type: [Number, String],
        default: 99
      },
      className: String
    },
    computed: {
      classes () {
        return `${prefixCls}`
      },
      dotClasses () {
        return [
          `${prefixCls}-dot`,
          {
            [`${this.className}`]: !!this.className,
            [`${prefixCls}-alone`]: this.alone
          }
        ]
      },
      countClasses () {
        return [
          `${prefixCls}-count`,
          {
            [`${this.className}`]: !!this.className,
            [`${prefixCls}-alone`]: this.alone
          }
        ]
      },
      finalCount () {
        return parseInt(this.count) >= parseInt(this.maxCount) ? `${this.maxCount}+` : this.count
      },
      badge () {
        let status = false
        if (this.count) {
          status = !(parseInt(this.count) === 0)
        }
        if (this.dot) {
          status = true
          if (this.count !== null) {
            if (parseInt(this.count) === 0) {
              status = false
            }
          }
        }
        return status
      },
      alone () {
        return this.$slots.default === undefined
      }
    }
  }
</script>

<style lang="less">
  @import "./style/badge";
</style>