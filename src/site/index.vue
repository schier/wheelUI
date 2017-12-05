<template>
  <div>
    <div class="page">
      <div class="page-hd">
        <h1>WheelUI</h1>
        <p class="desc">WheelUI是基于vue搭建的一款移动端UI组件库</p>
      </div>
      <div class="page-bd">
        <ul>
          <li class="cell">
            <h3 class="title">基础组件</h3>
            <div class="list">
              <router-link to="/demo/badge">badge徽章</router-link>
              <router-link to="/demo/icon">icon图标</router-link>
              <router-link to="/demo/avatar">avatar头像</router-link>
            </div>
          </li>
          <li class="cell">
            <h3 class="title">结构类</h3>
            <div class="list">
              <a href="javascript:">grid</a>
              <router-link to="/demo/cell">cell</router-link>
              <a href="javascript:">flex</a>
              <a href="javascript:">tab选项卡</a>
              <a href="javascript:">table表格</a>
            </div>
          </li>
          <li class="cell">
            <h3 class="title">表单类</h3>
            <div class="list">
              <router-link to="/demo/button">button按钮</router-link>
              <a href="javascript:">input输入框</a>
              <a href="javascript:">radio单选框</a>
              <a href="javascript:">checkbo多选框</a>
              <router-link to="/demo/switch">switch开关</router-link>
              <a href="javascript:">searchbar搜索框</a>
            </div>
          </li>
          <li class="cell">
            <h3 class="title">导航类</h3>
            <div class="list">
              <a href="javascript:">tabbar底部导航</a>
              <router-link to="/demo/navbar">navbar顶部导航</router-link>
              <a href="javascript:">menu菜单</a>
              <a href="javascript:">drawer抽屉导航</a>
            </div>
          </li>
          <li class="cell">
            <h3 class="title">操作反馈</h3>
            <div class="list">
              <router-link to="/demo/actionsheet">actionsheet动作面板</router-link>
              <router-link to="/demo/modal">modal对话框</router-link>
              <a href="javascript:">toast轻提示</a>
              <router-link to="/demo/pullload">pulload拉动加载/刷新</router-link>
              <router-link to="/demo/popover">popover</router-link>
            </div>
          </li>
          <li class="cell">
            <h3 class="title">动画</h3>
          </li>
          <li class="cell">
            <h3 class="title">拓展业务</h3>
            <div class="list">
              <a href="javascript:">login登录&注册</a>
              <a href="javascript:">msg结果展示</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="wh-tabbar">
      <div class="wh-tabbar-item cur">
        <icon type="ios-home" :size="iconSize" />
        <p>首页</p>
      </div>
      <div class="wh-tabbar-item">
        <icon type="ios-alarm-outline" :size="iconSize" />
        <p>闹钟</p>
      </div>
      <div class="wh-tabbar-item">
        <icon type="ios-world-outline" :size="iconSize" /></Icon>
        <p>世界</p>
      </div>
      <div class="wh-tabbar-item">
        <icon type="ios-color-filter-outline" :size="iconSize" />
        <p>损色</p>
      </div>
      <div class="wh-tabbar-item">
        <badge count="9"><icon type="ios-person-outline" :size="iconSize" /></badge>
        <p>我的</p>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '../components/badge/src/badge'
import Icon from '../components/icon/src/icon'
export default {
  name: 'app',
  components: { Badge, Icon },
  data () {
    return {
      iconSize: 26
    }
  }
}
</script>

<style lang="less">
  @import "../components/_style/fn";
  ul { list-style: none; }
  .page {
    padding: 30px 30px 44px;
    &-hd {
      margin-bottom: 20px;
      .desc { color: #999; }
    }
    &-bd {
      .cell {
        margin-bottom: 15px;
        color: #333;
        background-color: #fff;
        .title {
          padding: 10px;
          font-weight: normal;
        }
        .list {
          background-color: #f8f8f8;
          a {
            display: block;
            padding: 15px;
            color: inherit;
            border-bottom: 1px solid #eee;
          }
        }
      }
    }
  }

  .wh-tabbar {
    position: fixed;
    z-index: 500;
    bottom: 0;
    width: 100%;
    height: 44px;
    padding-top: 6px;
    display: flex;
    align-items: center;
    background-color: #fff;
    .hairline('top');
    &-item {
      flex: 1;
      text-align: center;
      font-size: @font-size-m;
      color: #555;
      &.cur {
        color: @brand-primary;
      }
    }
  }
</style>