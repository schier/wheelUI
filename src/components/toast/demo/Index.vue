<template>
  <div class="demo">
    <h1>toast</h1>
    <i-button>base</i-button>
    <toast></toast>
  </div>
</template>

<script>
  import { iButton, Toast } from '@/components'
  export default {
    data () {
      return {
        switch1: true
      }
    },
    components: { iButton, Toast },
    methods: {
      todo () {
        if (this.switch1) {
          console.log('1')
        } else {
          console.log('0')
        }
      }
    }
  }
</script>

<style lang="less">
  .demo {
    margin: 20px 10px;
  }
  .tt {
    margin-bottom: 10px;
  }
</style>
