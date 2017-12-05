<template>
  <div class="demo">
    <navbar>
      <icon type="ios-arrow-back" size="24" slot="hd"></icon>
      <span slot="bd">Navbar</span>
      <div slot="ft">
        <icon type="ios-search-strong" size="24" style="margin-right:15px;"></icon>
        
        <!-- <div class="wh-popover-wrap">
          <div class="wh-popover-mask"></div>
          <div class="wh-popover-rel"><slot><icon type="ios-more" size="24"></icon></slot></div>
          <transition name="fade">
            <div class="wh-popover">
              <div class="wh-popover-arrow"></div>
              <div class="wh-popover-inner">
                <p style="padding:10px;">Poptip 气泡提示</p>
              </div>
            </div>
          </transition>
        </div> -->
      </div>
    </navbar>
    <h3>popover</h3>
    <div class="wh-popover-wrap">
      <div class="wh-popover-mask"></div>
      <div class="wh-popover-rel"><slot><icon type="ios-more" size="24"></icon></slot></div>
      <transition name="fade">
        <div class="wh-popover">
          <div class="wh-popover-arrow"></div>
          <div class="wh-popover-inner">
            <p style="padding:10px;">Poptip 气泡提示</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { Popover, Navbar, Icon } from '@/components'
  export default {
    components: { Popover, Navbar, Icon },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
@import "../src/style/popover";
.demo {

}
h3 {
  margin-bottom: 20px;
}
</style>