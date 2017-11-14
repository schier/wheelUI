<template>
  <div class="demo">
    <h1>Avatar</h1>
    <div class="line">
      文字是
      <avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></avatar>
      <avatar>U</avatar>
      <avatar>user</avatar>
      <Avatar style="background-color: #87d068" icon="person" />
      <avatar icon="ios-home"></avatar>
      文字试试
    </div>
    <div class="line">
      zhongwen
      <avatar shape="circle" icon="ios-home"></avatar>
      <avatar shape="circle" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></avatar>
      <avatar shape="circle">U</avatar>
      <avatar shape="circle">user</avatar>
      haoa
    </div>
    <div class="line">
      文字嘛
      <avatar size="l" icon="ios-home"></avatar>
      <avatar size="s" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></avatar>
      <avatar size="m">U</avatar>
      试试
    </div>
  </div>
</template>

<script>
import Icon from '../../icon'
import Avatar from '../'
export default {
  data () {
    return {}
  },
  components: { Icon, Avatar }
}
</script>

<style lang="less">
@import "../../_style/index";
  .demo {
    padding: 20px;
  }
  .line {
    margin-bottom: 10px;
  }
</style>