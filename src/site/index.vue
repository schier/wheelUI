<template>
  <div>
    <div class="page">
      <div class="page-hd">
        <h1>WheelUI</h1>
        <p class="desc">WheelUI是基于vue搭建的一款移动端UI组件库</p>
      </div>
      <div class="page-bd">
        <cell-group v-for="cat in components" :key="cat.id" :title="cat.cat">
          <!-- <cell v-for="item in cat.items" isLink :to="['/demo/' + itme.link]"> -->
          <cell v-for="item in cat.items" :key="item.id" isLink to="https://mint-ui.github.io">
            <div slot="bd">{{ item.name }}</div>
            <div slot="ft"></div>
          </cell>
        </cell-group>
        <!-- <ul>
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
              <router-link to="/demo/toast">toast轻提示</router-link>
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
        </ul> -->
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
import { Cell, CellGroup, Badge, Icon } from '@/components'
export default {
  name: 'app',
  components: { Cell, CellGroup, Badge, Icon },
  data () {
    return {
      iconSize: 26,
      components: [
        {
          cat: '基础组件',
          items: [
            {
              name: 'badge徽章',
              link: 'badge'
            },
            {
              name: 'avatar头像',
              link: 'avatar'
            },
            {
              name: 'icon图标',
              link: 'icon'
            }
          ]
        },
        {
          cat: '结构类',
          items: [
            {
              name: 'grid',
              link: 'grid'
            },
            {
              name: 'cell',
              link: 'cell'
            },
            {
              name: 'flex',
              link: 'flex'
            },
            {
              name: 'tab选项卡',
              link: 'tab'
            },
            {
              name: 'table表格',
              link: 'table'
            }
          ]
        },
        {
          cat: '表单类',
          items: [
            {
              name: 'button按钮',
              link: 'button'
            },
            {
              name: 'input&textarea输入框',
              link: 'input'
            },
            {
              name: 'radio单选框',
              link: 'radio'
            },
            {
              name: 'checkbox多选框',
              link: 'checkbox'
            },
            {
              name: 'switch开关',
              link: 'switch'
            },
            {
              name: 'searchbar搜索框',
              link: 'searchbar'
            }
          ]
        },
        {
          cat: '导航类',
          items: [
            {
              name: 'tabbar底部导航',
              link: 'tabbar'
            },
            {
              name: 'navbar顶部导航',
              link: 'navbar'
            },
            {
              name: 'menu菜单',
              link: 'menu'
            },
            {
              name: 'drawer抽屉导航',
              link: 'drawer'
            }
          ]
        },
        {
          cat: '操作反馈',
          items: [
            {
              name: 'actionsheet动作面板',
              link: 'actionsheet'
            },
            {
              name: 'modal对话框',
              link: 'modal'
            },
            {
              name: 'toast轻提示',
              link: 'toast'
            },
            {
              name: 'pulload拉动加载',
              link: 'pullload'
            },
            {
              name: 'popover',
              link: 'popover'
            }
          ]
        },
        {
          cat: '动画',
          items: [
            {
              name: '动画',
              link: 'animation'
            }
          ]
        },
        {
          cat: '拓展业务',
          items: [
            {
              name: 'login登录&注册',
              link: 'login'
            },
            {
              name: 'msg结果展示',
              link: 'msg'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">
  @import "../components/_style/fn";
  ul { list-style: none; }
  .page {
    padding: 0 0 64px;
    &-hd {
      padding: 20px;
      .desc { color: #999; }
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