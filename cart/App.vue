<template>
  <div class="app">
    <MyHeader title="购物车案例" background="pink" color="green" />
    <MyGoods v-for="item in list" :key="item.id" :goods="item" />
    <MyFooter :list="list" />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyGoods from "@/components/MyGoods";
import MyFooter from "@/components/MyFooter";
import axios from "axios";
export default {
  components: { MyHeader, MyGoods, MyFooter },
  data() {
    return {
      list: [], // 商品所有数据
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      const res = await axios({ url: "/api/cart" });
      this.list = res.data.list;
    },
  },
};
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
