<template>
  <div class="demo">
    <i-button>default</i-button>
    <i-button disabled>default disabled</i-button>
    <i-button type="primary" loading>primary</i-button>
    <i-button type="primary" icon="skip-backward">primary</i-button>
    <i-button type="info" icon="ios-search-strong">info</i-button>
    <i-button type="info" disabled>info</i-button>
    <i-button type="success">success</i-button>
    <i-button type="success" disabled>success</i-button>
    <i-button type="warning">warning</i-button>
    <i-button type="warning" disabled>warning</i-button>
    <i-button type="error">error</i-button>
    <i-button type="error" disabled>error</i-button>
    <!-- inline -->
    <i-button type="default" inline>default</i-button>
    <i-button type="info" inline>info</i-button>
    <i-button type="success" inline>success</i-button>
    <i-button type="warning" inline>warning</i-button>
    <i-button type="error" inline>error</i-button>
    <!-- size -->
    <i-button type="default" size="m" icon="ios-search-strong">default</i-button>
    <i-button type="info" size="m">info</i-button>
    <i-button type="success" size="m" icon="ios-search-strong">success</i-button>
    <i-button type="warning" size="m">warning</i-button>
    <i-button type="error" size="m">error</i-button>
    <i-button type="default" inline size="m">default</i-button>
    <i-button type="info" inline size="m" icon="ios-search-strong">info</i-button>
    <i-button type="success" inline size="m" icon="ios-search-strong">success</i-button>
    <i-button type="warning" inline size="m">warning</i-button>
    <i-button type="error" inline size="m">error</i-button>
  </div>
</template>

<script>
import { iButton, ButtonGroup } from '@/components'
export default {
  components: { iButton, ButtonGroup }
}
</script>

<style lang="less" scoped>
.demo {
  padding: 10px;
}
</style>