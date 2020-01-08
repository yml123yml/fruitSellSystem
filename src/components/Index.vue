<template>
  <div>
    我是首页
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>
    <div class="mui-content">
      <div id="tabbar" class="mui-control-content mui-active">
        <div class="title">这是div模式选项卡中的第1个子页面.</div>
      </div>
    </div>
    <div id="tabbar-with-chat" class="mui-control-content">
      <div class="title">这是div模式选项卡中的第2个子页面，该页面展示一个消息列表</div>

      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell">
          <a href class="mui-navigate-right">Item 1</a>
        </li>
        <li class="mui-table-view-cell">
          <a href class="mui-navigate-right">Item 19</a>
        </li>
        <li class="mui-table-view-cell">
          <a href class="mui-navigate-right">Item 20</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style>
</style>
