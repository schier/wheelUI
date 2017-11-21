<template>
  <div>
    <cell-group tips="无论iPhone是否锁定，都会显示通知预览。">
      <cell isLink>
        <div slot="bd">显示预览</div>
        <div slot="ft">始终</div>
      </cell>
    </cell-group>
    <cell-group title="通知类型">
      <cell isLink>
        <div slot="hd" style="font-size:0"><avatar icon="ios-home" size="s" style="background-color:#f40;margin-right:15px;"></avatar></div>
        <div slot="bd">
          <p>淘宝</p>
          <p style="font-size:12px;">声音、横幅</p>
        </div>
        <div slot="ft"></div>
      </cell>
      <cell isLink>
        <div slot="hd" style="font-size:0"><avatar icon="ios-home" size="s" style="background-color:#00a2ae;margin-right:15px;"></avatar></div>
        <div slot="bd">
          <p>淘宝</p>
          <p style="font-size:12px;">声音、横幅</p>
        </div>
        <div slot="ft"></div>
      </cell>
    </cell-group>
    <cell-group>
      <cell isLink>
        <div slot="hd" style="font-size:0;"><icon type="ios-home" color="#108ee9" size="24" style="margin-right:15px;"></icon></div>
        <div slot="bd">朋友圈</div>
        <div slot="ft" style="font-size: 0;">
          <badge dot><avatar size="s" style="background-color:#ccc;margin:-4px auto;"></avatar></badge>
        </div>
      </cell>
    </cell-group>
    <cell-group>
      <cell isLink>
        <div slot="hd" style="font-size:0;"><icon type="ios-home" color="#f04134" size="24" style="margin-right:15px;"></icon></div>
        <div slot="bd">扫一扫</div>
        <div slot="ft"></div>
      </cell>
      <cell isLink>
        <div slot="hd" style="font-size:0"><icon type="ios-home" color="#00a854" size="24" style="margin-right:15px;"></icon></div>
        <div slot="bd">摇一摇</div>
        <div slot="ft"></div>
      </cell>
    </cell-group>
  </div>
</template>

<script>
import { Badge, Icon, Avatar, Cell, CellGroup } from '@/components'
export default {
  components: { Badge, Icon, Avatar, Cell, CellGroup }
}
</script>

<style lang="less">

</style>