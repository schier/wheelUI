<template>
  <div class="demo">
    <h1>badge徽章</h1>
    <div style="background-color:#ccc; margin-bottom:5px;">
      <badge dot><a href="#" class="demo-badge"></a></badge>
      <badge count="2"><a href="#" class="demo-badge"></a></badge>
      <badge count="100"><a href="#" class="demo-badge"></a></badge>
      <badge dot />
      <badge count="1" />
      <badge count="122">
        <!-- <icon type="ionic" :size="iconSize" /> -->
      </badge>
    </div>
    <div style="background-color:#ccc">
      <badge count="20" class-name="demo-badge-alone"></badge>
      <badge dot><a href="#">可以是一个链接</a></badge>
    </div>
  </div>
</template>

<script>
  import { Badge } from '@/components'
  export default {
    data () {
      return {
        iconSize: 30
      }
    },
    components: { Badge }
  }
</script>

<style lang="less" scoped>
  .wh-badge {
    margin: 20px 10px;
  }
  .demo-badge {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    background-color: #eee;
  }
  .demo-badge-alone {
    background-color: #5cb85c !important;
  }
</style>