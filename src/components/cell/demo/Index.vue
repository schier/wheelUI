<template>
  <div>
    <!-- <div class="wh-cell-group">
      <div class="wh-cells">
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd" style="font-size:0;"><avatar shape="circle" size="l" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style="margin-right:15px;background-color:#87d068"></avatar></div>
          <div class="wh-cell-bd">
            <h3 style="font-size:16px;font-weight:normal;">刘波</h3>
            <p style="font-size:14px;">Apple ID、iCloud、iTunes与App Store</p>
          </div>
          <div class="wh-cell-ft"></div>
        </div>
      </div>
    </div>
    <div class="wh-cell-group">
      <div class="wh-cells">
        <div class="wh-cell">
          <div class="wh-cell-hd"></div>
          <div class="wh-cell-bd">
            <p>主体文字</p>
          </div>
          <div class="wh-cell-ft">说明文字</div>
        </div>
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd"></div>
          <div class="wh-cell-bd">
            <p>有链接的</p>
          </div>
          <div class="wh-cell-ft">说明文字</div>
        </div>
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd"><div style="height:24px;width:24px;border-radius:3px;background:#ccc;margin-right:15px;"></div></div>
          <div class="wh-cell-bd">
            <p>带图标的</p>
          </div>
          <div class="wh-cell-ft">说明文字</div>
        </div>
      </div>
    </div>
    <div class="wh-cell-group">
      <div class="wh-cells">
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd" style="font-size:0;">
            <avatar icon="ios-home" style="background-color:#f40;margin-right:15px;"></avatar>
          </div>
          <div class="wh-cell-bd">
            <p>通知</p>
          </div>
          <div class="wh-cell-ft" style="font-size:0;"><badge count="10"></badge></div>
        </div>
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd">
            <div style="height:20px;width:20px;padding: 2px;border-radius:3px;background:#00a854;margin-right:15px;text-align:center">
            </div>
          </div>
          <div class="wh-cell-bd">
            <p>控制中心</p>
          </div>
          <div class="wh-cell-ft" style="font-size:0;"><badge dot></badge></div>
        </div>
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd"><div style="height:24px;width:24px;border-radius:3px;background:#ccc;margin-right:15px;"></div></div>
          <div class="wh-cell-bd">
            <p>勿扰模式</p>
          </div>
          <div class="wh-cell-ft"></div>
        </div>
      </div>
    </div>
    <div class="wh-cell-group">
      <div class="wh-cells">
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd"></div>
          <div class="wh-cell-bd">显示预览</div>
          <div class="wh-cell-ft">始终</div>
        </div>
      </div>
      <div class="wh-cell-tips">无论iPhone是否锁定，都会显示通知预览</div>
    </div>
    <div class="wh-cell-group">
      <div class="wh-cell-title">通知类型</div>
      <div class="wh-cells">
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd">
            <avatar icon="ios-home" size="s" style="background-color:#f40;margin-right:15px;"></avatar>
          </div>
          <div class="wh-cell-bd">
            <p>淘宝</p>
            <p style="font-size:12px;">关闭</p>
          </div>
          <div class="wh-cell-ft"></div>
        </div>
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd"><div style="height:24px;width:24px;border-radius:3px;background:#00a854;margin-right:15px;"></div></div>
          <div class="wh-cell-bd">
            <p>微信</p>
            <p style="font-size:12px;">标记、声音、横幅</p>
          </div>
          <div class="wh-cell-ft"></div>
        </div>
      </div>
    </div>
    <div class="wh-cell-group">
      <div class="wh-cells">
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd"></div>
          <div class="wh-cell-bd">尾巴很长的</div>
          <div class="wh-cell-ft" style="width:200px;text-align:right;font-size:12px;">无论iPhone是否锁定，都会显示通知预览</div>
        </div>
      </div>
    </div>
    <div class="wh-cell-group">
      <div class="wh-cells">
        <div class="wh-cell">
          <div class="wh-cell-hd">手机号</div>
          <div class="wh-cell-bd">
            <input type="tel" name="telphone">
          </div>
          <div class="wh-cell-ft"></div>
        </div>
      </div>
    </div> -->
    <cell-group title="通知" tips="无论iPhone是否锁定，都会显示通知预览">
      <cell isLink>
        <div slot="hd" style="font-size:0"><avatar icon="ios-home" size="m" style="background-color:#f40;margin-right:15px;"></avatar></div>
        <div slot="bd">
          <p>游戏</p>
        </div>
        <div slot="ft" style="font-size: 0;">
          <badge dot><a href="#" style="font-size:14px;">可以是一个链接</a></badge>
        </div>
      </cell>
      <cell isLink>
        <div slot="hd" style="font-size:0"><avatar icon="ios-home" size="m" style="background-color:#f40;margin-right:15px;"></avatar></div>
        <div slot="bd">
          <p>购物</p>
        </div>
        <div slot="ft" style="font-size: 0;">
          <p style="font-size: 14px;margin-right:10px;">微信的badge是这样的<badge dot></badge></p>
        </div>
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