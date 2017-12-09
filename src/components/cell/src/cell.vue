<template>
  <div :class="classes" @click="handleClick">
  <!-- <div :class="classes"> -->
    <div :class="[prefixCls + '-hd']">
      <slot name='hd'></slot>
    </div>
    <div :class="[prefixCls + '-bd']">
      <slot name='bd'></slot>
    </div>
    <div :class="[prefixCls + '-ft']">
      <slot name='ft'></slot>
    </div>
  </div>
</template>

<script>
  const prefixCls = 'wh-cell'
  export default {
    name: 'Cell',
    props: {
      to: [String, Object],
      isLink: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        prefixCls: prefixCls
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-access`]: !!this.isLink
          }
        ]
      },
      href () {
        if (this.to && !this.added && this.$router) {
          const resolved = this.$router.match(this.to)
          console.log(resolved.matched.length)
          if (!resolved.matched.length) return this.to
          this.$nextTick(() => {
            this.added = true
            this.$el.addEventListener('click', this.handleClick)
          })
          return resolved.path
        }
        return this.to
      }
    },
    methods: {
      handleClick (event) {
        if (this.to && !this.added && this.$router) {
          const resolved = this.$router.match(this.to)
          if (!resolved.matched.length) {
            window.location.href = this.to
          } else {
            this.$nextTick(() => {
              this.added = true
            })
            event.preventDefault()
            this.$router.push(resolved.path)
          }
        } else {
          this.$emit('click', event)
        }
      }
    }
  }
</script>

<style lang="less">
@import "./style/cell";
</style>