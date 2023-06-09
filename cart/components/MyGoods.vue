<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="goods.goods_id"
          v-model="goods.goods_state"
        />
        <label class="custom-control-label" :for="goods.goods_id">
          <img :src="this.goods.goods_img" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ goods.goods_name }}</div>
      <div class="bottom">
        <span class="price">¥ {{ goods.goods_price }}</span>
        <span><MyCount :goods="goods" /></span>
      </div>
    </div>
  </div>
</template>

<script>
import MyCount from "@/components/MyCount.vue";
export default {
  props: {
    goods: {
      type: Object,
      required: true,
    },
  },
  components: { MyCount },
};
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
