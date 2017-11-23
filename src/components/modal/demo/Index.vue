<template>
  <div class="demo">
    <i-button>modal</i-button>
    <modal></modal>
  </div>
</template>

<script>
  import { iButton, Modal } from '@/components'
  export default {
    components: { iButton, Modal }
  }
</script>

<style lang="less" scoped>
.demo {
  padding: 20px;
}
</style>