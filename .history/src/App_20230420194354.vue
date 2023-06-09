<template>
  <div class="app" ref="tableWrapper"  :row-key="row => row.id">
    <el-table :data="tableData" ref="table" >
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Age" prop="age"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  data () {
    return {
      sortable: null, // 拖拽对象
      tableData: [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Bob', age: 40 }
      ]
    }
  },
  mounted () {
    // this.rowDrag()
    this.dragSort()
  },

  methods: {
    // dragSort () {
    //   const el = document.querySelector('.el-table__body-wrapper > table > tbody')
    //   const sortable = new Sortable(el, {
    //     group: 'sort-move-drag',
    //     animation: 150,
    //     fallbackOnBody: true,
    //     swapThreshold: 0.65,
    //     onEnd: evt => {
    //       const arr = this.tableData // 获取表数据
    //       arr.splice(evt.newIndex, 0, arr.splice(evt.oldIndex, 1)[0]) // 数据处理，获取最新的表格数据
    //       this.$set(this, 'tableData', arr) // 更新表格数据并触发响应式更新
    //       console.log(arr)
    //       this.$forceUpdate() // 强制更新组件
    //       // this.$nextTick(() => {
    //       //   this.tableData = arr
    //       //   this.$forceUpdate() // 强制更新组件
    //       //   console.log(this.tableData)
    //       // })
    //       // const curRow = this.tableData.splice(evt.oldIndex, 1)[0]
    //       // this.tableData.splice(evt.newIndex, 0, curRow)
    //       // this.updateSort() 更新数据库，将排序后的数据传给后端
    //     }
    //   })
      console.log('数据', sortable)
      // Sortable.create(el, {
      //   group: 'sort-move-drag',
      //   animation: 150,
      //   fallbackOnBody: true,
      //   swapThreshold: 0.65,
      //   onEnd: ({ newIndex, oldIndex }) => {
      //     const movedRow = this.tableData.splice(oldIndex, 1)[0]
      //     this.tableData.splice(newIndex, 0, movedRow)
      //
      //     // 发送请求更新排序数据
      //     this.updateSortData()
      //   }
      // })
    },
    updateSortData () {

    }
    // rowDrag () {
    //   const tbody = document.querySelector('.el-table__body-wrapper tbody')
    //   console.log('aaa', tbody)
    //   const that = this
    //   Sortable.create(tbody, {
    //     onEnd ({ newIndex, oldIndex }) {
    //       console.log('新旧', newIndex, oldIndex)
    //       const currentRow = that.tableData.splice(oldIndex, 1)[0]
    //       that.tableData.splice(newIndex, 0, currentRow)
    //     }
    //   })
    // }
  }

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
