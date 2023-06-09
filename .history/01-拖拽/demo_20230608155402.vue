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
      tableData: [
        { id: 1, name: 'John', age: 18, gender: 'Male' },
        { id: 2, name: 'Lisa', age: 20, gender: 'Female' },
        { id: 3, name: 'Tom', age: 22, gender: 'Male' },
        { id: 4, name: 'Jane', age: 25, gender: 'Female' },
        { id: 5, name: 'Jerry', age: 28, gender: 'Male' },
        { id: 6, name: 'Lucy', age: 30, gender: 'Female' },
      ],
tableData2: [
        { id: 7, name: 'David', age: 32, gender: 'Male' },
        { id: 8, name: 'Emma', age: 35, gender: 'Female' },
        { id: 9, name: 'Mike', age: 38, gender: 'Male' },
        { id: 10, name: 'Grace', age: 40, gender: 'Female' },
        { id: 11, name: 'Steven', age: 45, gender: 'Male' },
        { id: 12, name: 'Sophia', age: 50, gender: 'Female' },
      ],
    }
  },


}
</script>

<style scoped>
</style>
