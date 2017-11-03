<template>
  <div>
    <div class="wh-cell-group">
      <div class="wh-cells">
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd"><div style="height:45px;width:45px;border-radius:50%;background:#333;margin-right:15px;"></div></div>
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
          <div class="wh-cell-hd"><div style="height:24px;width:24px;border-radius:3px;background:#f40;margin-right:15px;"></div></div>
          <div class="wh-cell-bd">
            <p>通知</p>
          </div>
          <div class="wh-cell-ft"></div>
        </div>
        <div class="wh-cell wh-cell-access">
          <div class="wh-cell-hd"><div style="height:24px;width:24px;border-radius:3px;background:#00a854;margin-right:15px;"></div></div>
          <div class="wh-cell-bd">
            <p>控制中心</p>
          </div>
          <div class="wh-cell-ft"></div>
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
          <div class="wh-cell-hd"><div style="height:24px;width:24px;border-radius:3px;background:#f40;margin-right:15px;"></div></div>
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
    </div>
  </div>
</template>

<script>
  // const prefixCls = 'wh-cell'
  export default {}
</script>

<style lang="less">
@import "../../_style/index";
@import "../src/style/cell";
</style>