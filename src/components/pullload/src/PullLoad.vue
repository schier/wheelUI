<template>
  <div :class="[prefixCls + '-wrap']" :style="wrapStyle">
    <div v-if="topLoadMethod" :class="[prefixCls + '-hd']" :style="hdStyle">
      <slot name="hd" :state="state" :state-text="topText">
        <p class="text">{{ topText }}</p>
      </slot>
    </div>
    <div :class="[prefixCls + '-bd']">
      <slot></slot>
    </div>
    <div v-if="bottomLoadMethod" :class="[prefixCls + '-ft']" :style="ftStyle">
      <slot name="ft" :state="state" :state-text="bottomText">
        <p class="text">{{ bottomText }}</p>
      </slot>
    </div>
  </div>
</template>

<script>
  import { throttle } from '../../_utils/throttle'
  import Icon from '../../icon'
  import { TOP_DEFAULT_CONFIG, BOTTOM_DEFAULT_CONFIG } from './config'
  const prefixCls = 'wh-pullload'
  export default {
    name: 'PullLoad',
    components: { Icon },
    props: {
      distanceIndex: { // 滑动的阀值（值越大滑动的速度越慢）
        type: Number,
        default: 2
      },
      topBlockHeight: { // 顶部在滚动容器外的块级元素区域高度
        type: Number,
        default: 50
      },
      bottomBlockHeight: { // 底部在滚动容器外的块级元素区域高度
        type: Number,
        default: 50
      },
      wrapHeight: { // 滚动容器的高度
        type: String,
        default: '100%'
      },
      topLoadMethod: {
        type: Function
      },
      bottomLoadMethod: {
        type: Function
      },
      isThrottleTopPull: {
        type: Boolean,
        default: true
      },
      isThrottleBottomPull: {
        type: Boolean,
        default: true
      },
      isThrottleScroll: {
        type: Boolean,
        default: true
      },
      isTopBounce: { // 是否启用下拉回弹效果
        type: Boolean,
        default: true
      },
      isBottomBounce: { // 是否启用上拉回弹效果
        type: Boolean,
        default: true
      },
      topConfig: { // 滚动容器顶部信息配置
        type: Object,
        default: () => {
          return {}
        }
      },
      bottomConfig: { // 滚动容器底部信息配置
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data () {
      return {
        prefixCls: prefixCls,
        scrollEl: null, // ？
        startScrollTop: 0,
        startY: 0,
        currentY: 0,
        distance: 0,
        direction: '', // 拉动方向 ['down', 'up']
        diff: 0,
        beforeDiff: 0,
        topText: '', // 顶部配置文字信息
        bottomText: '', // 底部配置文字信息
        state: '', // 当前执行状态
        bottomReached: false,
        throttleEmitTopPull: null,
        throttleEmitBottomPull: null,
        throttleEmitScroll: null,
        throttleOnInfiniteScroll: null
      }
    },
    computed: {
      wrapStyle () {
        let style = {}
        style = {
          height: this.wrapHeight,
          transform: `translate3d(0, ${this.diff}px, 0)`
        }
        return style
      },
      hdStyle () {
        return {
          height: `${this.topBlockHeight}px`,
          marginTop: `${-this.topBlockHeight}px`
        }
      },
      ftStyle () {
        return {
          height: `${this.bottomBlockHeight}px`,
          marginBottom: `${-this.bottomBlockHeight}px`
        }
      },
      _topConfig: function () {
        return Object.assign({}, TOP_DEFAULT_CONFIG, this.topConfig)
      },
      _bottomConfig: function () {
        return Object.assign({}, BOTTOM_DEFAULT_CONFIG, this.bottomConfig)
      }
    },
    watch: {
      state (val) {
        if (this.direction === 'down') {
          this.$emit('top-state-change', val)
        } else {
          this.$emit('bottom-state-change', val)
        }
      }
    },
    methods: {
      actionPull () {
        this.state = 'pull'
        this.direction === 'down'
          ? this.topText = this._topConfig.pullText
          : this.bottomText = this._bottomConfig.pullText
      },
      actionTrigger () {
        this.state = 'trigger'
        this.direction === 'down'
          ? this.topText = this._topConfig.triggerText
          : this.bottomText = this._bottomConfig.triggerText
      },
      actionLoading () {
        this.state = 'loading'
        if (this.direction === 'down') {
          this.topText = this._topConfig.loadingText
          /* eslint-disable no-useless-call */
          this.topLoadMethod.call(this, this.actionLoaded)
          this.scrollTo(this._topConfig.stayDistance)
        } else {
          this.bottomText = this._bottomConfig.loadingText
          this.bottomLoadMethod.call(this, this.actionLoaded)
          this.scrollTo(-this._bottomConfig.stayDistance)
        }
      },
      actionLoaded (loadState = 'done') {
        this.state = `loaded-${loadState}`
        let loadedStayTime
        if (this.direction === 'down') {
          this.topText = loadState === 'done'
            ? this._topConfig.doneText
            : this._topConfig.failText
          loadedStayTime = this._topConfig.loadedStayTime
        } else {
          this.bottomText = loadState === 'done'
            ? this._bottomConfig.doneText
            : this._bottomConfig.failText
          loadedStayTime = this._bottomConfig.loadedStayTime
        }
        setTimeout(() => {
          this.scrollTo(0)

          // reset state
          setTimeout(() => {
            this.state = ''
          }, 200)
        }, loadedStayTime)
      },
      scrollTo (y, duration = 200) {
        this.$el.style.transition = `${duration}ms`
        this.diff = y
        setTimeout(() => {
          this.$el.style.transition = ''
        }, duration)
      },
      checkBottomReached () {
        return this.scrollEl.scrollTop + this.scrollEl.offsetHeight + 1 >= this.scrollEl.scrollHeight
      },
      handleTouchStart (event) {
        this.startY = event.touches[0].clientY
        this.beforeDiff = this.diff
        this.startScrollTop = this.scrollEl.scrollTop
        this.bottomReached = this.checkBottomReached()
      },
      handleTouchMove (event) {
        this.currentY = event.touches[0].clientY
        this.distance = (this.currentY - this.startY) / this.distanceIndex + this.beforeDiff
        this.direction = this.distance > 0 ? 'down' : 'up'

        if (this.startScrollTop === 0 && this.direction === 'down' && this.isTopBounce) {
          event.preventDefault()
          event.stopPropagation()
          this.diff = this.distance
          this.isThrottleTopPull ? this.throttleEmitTopPull(this.diff) : this.$emit('top-pull', this.diff)

          if (typeof this.topLoadMethod !== 'function') return

          if (this.distance < this._topConfig.triggerDistance &&
            this.state !== 'pull' && this.state !== 'loading') {
            this.actionPull()
          } else if (this.distance >= this._topConfig.triggerDistance &&
            this.state !== 'trigger' && this.state !== 'loading') {
            this.actionTrigger()
          }
        } else if (this.bottomReached && this.direction === 'up' && this.isBottomBounce) {
          event.preventDefault()
          event.stopPropagation()
          this.diff = this.distance
          this.isThrottleBottomPull ? this.throttleEmitBottomPull(this.diff) : this.$emit('bottom-pull', this.diff)

          if (typeof this.bottomLoadMethod !== 'function') return

          if (Math.abs(this.distance) < this._bottomConfig.triggerDistance &&
            this.state !== 'pull' && this.state !== 'loading') {
            this.actionPull()
          } else if (Math.abs(this.distance) >= this._bottomConfig.triggerDistance &&
            this.state !== 'trigger' && this.state !== 'loading') {
            this.actionTrigger()
          }
        }
      },
      handleTouchEnd () {
        if (this.diff !== 0) {
          if (this.state === 'trigger') {
            this.actionLoading()
            return
          }
          // pull cancel
          this.scrollTo(0)
        }
      },
      handleScroll (event) {
        this.isThrottleScroll ? this.throttleEmitScroll(event) : this.$emit('scroll', event)
        this.throttleOnInfiniteScroll()
      },
      onInfiniteScroll () {
        if (this.checkBottomReached()) {
          console.log('bottom')
          this.$emit('infinite-scroll')
        }
      },
      throttleEmit (delay, mustRunDelay = 0, eventName) {
        const throttleMethod = function () {
          const args = [...arguments]
          args.unshift(eventName)
          this.$emit.apply(this, args)
        }
        return throttle(throttleMethod, delay, mustRunDelay)
      },
      bindEvents () {
        this.scrollEl.addEventListener('touchstart', this.handleTouchStart)
        this.scrollEl.addEventListener('touchmove', this.handleTouchMove)
        this.scrollEl.addEventListener('touchend', this.handleTouchEnd)
        this.scrollEl.addEventListener('scroll', this.handleScroll)
      },
      createThrottleMethods () {
        this.throttleEmitTopPull = this.throttleEmit(200, 300, 'top-pull')
        this.throttleEmitBottomPull = this.throttleEmit(200, 300, 'bottom-pull')
        this.throttleEmitScroll = this.throttleEmit(100, 150, 'scroll')
        this.throttleOnInfiniteScroll = throttle(this.onInfiniteScroll, 400)
      },
      init () {
        this.createThrottleMethods()
        // this.scrollEl = this.$el.querySelector(`.${prefixCls}-bd`)
        this.scrollEl = this.$el.querySelector('.wh-pullload-bd')
        this.bindEvents()
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style lang="less">
@import "./style/pullload";
</style>

