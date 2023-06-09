<template>
  <div>
    <div id="list" class="list-group">
      <div class="list-group-item">Item 1</div>
      <div class="list-group-item">Item 2</div>
      <div class="list-group-item">Item 3</div>
      <div class="list-group-item">Item 4</div>
      <div class="list-group-item">Item 5</div>
    </div>
  </div>
</template>

<script>
import Sortable from 'sortablejs';

export default {
  mounted() {
    Sortable.create(document.getElementById('list'), {
      swap: true,
      swapClass: "highlight",
      animation: 150
    });
  }
};
</script>

<style scoped>
.list-group {
  display: flex;
  flex-direction: column;
}

.list-group-item {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.highlight {
  background-color: yellow;
}
</style>
