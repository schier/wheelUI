<template>
  <div class="demo">
    <h1>icon图标</h1>
    <icon type="ios-home-outline" :size="iconSize" />
    <icon type="ios-home" :size="iconSize" />
    <icon type="ios-person-outline" :size="iconSize" />
    <icon type="ios-person" :size="iconSize" />
    <icon type="compass" :size="iconSize" />
    <icon type="android-compass" :size="iconSize" />
  </div>
</template>

<script>
import { Icon } from '@/components'
export default {
  data () {
    return {
      iconSize: 26
    }
  },
  components: { Icon }
}
</script>

<style lang="less">
  
</style>