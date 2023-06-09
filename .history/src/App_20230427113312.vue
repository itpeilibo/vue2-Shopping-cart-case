<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {



}
</script>

<style scoped>
.app {
  /* 滚动条超出
  解决方案：自定义限制高度 */
  box-sizing: border-box;
  padding: 50px 0;
  max-height: 100vh;
  overflow: auto;
}
</style>
