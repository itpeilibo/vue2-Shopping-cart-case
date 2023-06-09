<template>
  <div class="app" ref="tableWrapper"  >
    <el-row>
  <el-col :span="12">
    <el-table :data="tableData" ref="table1" :row-key="row => row.id">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Age" prop="age"></el-table-column>
      <el-table-column label="Age" prop="gender"></el-table-column>
    </el-table>
  </el-col>
  <el-col :span="12">
    <el-table :data="tableData2" ref="table2" :row-key="row => row.id">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Age" prop="age"></el-table-column>
      <el-table-column label="Age" prop="gender"></el-table-column>
    </el-table>
  </el-col>
</el-row>

  </div>
</template>

<script>
import Sortable from 'sortablejs'
import {Swap} from 'sortablejs/modular/sortable.core.esm'
export default {
  data () {
    return {
      sortable: null, // 拖拽对象

    }
  },


}
</script>

<style scoped>
</style>
