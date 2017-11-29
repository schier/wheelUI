<template>
  <div class="demo">
    <h3>popover</h3>
    <popover>文字</popover>
  </div>
</template>

<script>
  import { Popover } from '@/components'
  export default {
    components: { Popover },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
.demo {
  padding: 20px;
}
</style>