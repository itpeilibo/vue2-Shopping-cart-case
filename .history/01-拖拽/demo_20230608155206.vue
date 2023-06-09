<template>
<div>
    <ul id="sortable-list">
      <li v-for="(item, index) in itemList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
import Sortable from 'sortablejs';
<script>
</script>
<style scoped></style>
