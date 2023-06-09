<template>
<div>
    <ul id="sortable-list">
      <li v-for="(item, index) in itemList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
import Sortable from 'sortablejs';
<script>
export default {
  data: {
    return: {
      mounted() {
  const sortableList = document.getElementById('sortable-list');
  new Sortable(sortableList, {
    swap: true,
    onEnd: this.handleSortEnd, // 处理排序完成的回调函数
  });
},
methods: {
  handleSortEnd(event) {
    console.log('List sorted!');
  },
},
    }
  }
}
</script>
<style scoped></style>
