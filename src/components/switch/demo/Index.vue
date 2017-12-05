<template>
  <div class="demo">
    <h1>switch</h1>
    <p class="tt"><i-switch v-model="switch1" @on-change="todo" color="#f40"></i-switch></p>
    <p class="tt"><i-switch size="m"></i-switch></p>
    <p class="tt"><i-switch disabled></i-switch></p>
    <p class="tt"><i-switch disabled v-model="switch1"></i-switch></p>
  </div>
</template>

<script>
  import { iSwitch } from '@/components'
  export default {
    data () {
      return {
        switch1: true
      }
    },
    components: { iSwitch },
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
