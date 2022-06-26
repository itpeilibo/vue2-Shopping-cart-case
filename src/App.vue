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
  padding: 50px 0;
}
</style>
