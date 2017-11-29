<template>
  <div>
    <p>TODO：无限滚动，填充满整个高度</p>
    <div style="height:700px;overflow:hidden;background-color:#ccc">
      <pull-load :top-load-method="refresh" @infinite-scroll="loadmore">
        <p class="demo-p" v-for="(item, index) in list" :key="index">Content {{ item }}</p>
        <div>加载中...</div>
      </pull-load>
    </div>
  </div>
</template>

<script>
import { PullLoad } from '@/components'
export default {
  components: { PullLoad },
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    loadmore (loaded) {
      console.log('loadmore')
      setTimeout(() => {
        const first = this.list[0]
        for (let i = 1; i < 11; i++) {
          this.list.unshift(first - i)
        }
        // loaded('done')
      }, 1000)
    },
    refresh (loaded) {
      console.log('refresh')
      setTimeout(() => {
        const first = this.list[0]
        for (let i = 1; i < 11; i++) {
          this.list.unshift(first - i)
        }
        loaded('done')
      }, 1000)
    }
  }
}
</script>

<style lang="less">
.demo-p {
  background-color: #fff;
  margin-bottom: 5px;
  padding: 10px;
}
</style>