<template>
  <div class="my-counter">
    <button
      type="button"
      class="btn btn-light"
      @click="goods.goods_count--"
      :disabled="goods.goods_count == 0"
    >
      -
    </button>
    <input type="number" class="form-control inp" v-model="goods.goods_count" />
    <button type="button" class="btn btn-light" @click="goods.goods_count++">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
