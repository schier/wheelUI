<template>
  <div>
    <navbar>
      <icon type="ios-arrow-back" size="24" slot="hd"></icon>
      <span slot="bd">Navbar</span>
      <div slot="ft">
        <icon type="ios-search-strong" size="24" style="margin-right:15px;"></icon>
        <icon type="ios-more" size="24"></icon>
      </div>
    </navbar>
    <navbar mode="light">
      <icon type="ios-arrow-back" size="24" slot="hd"></icon>
      <span slot="bd">Navbar</span>
      <div slot="ft">
        <icon type="ios-search-strong" size="24" style="margin-right:15px;"></icon>
        <icon type="ios-more" size="24"></icon>
      </div>
    </navbar>
  </div>
</template>

<script>
import { Icon, Navbar } from '@/components'
export default {
  components: { Icon, Navbar }
}
</script>

<style lang="less">

</style>