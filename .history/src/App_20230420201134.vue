<template>
  <div class="app" ref="tableWrapper"  >
    <el-table :data="tableData" ref="table" :row-key="row => row.id">
      <el-table-column label="ID" prop="id" draggable></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Age" prop="age" draggable></el-table-column>
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
    // this.dragSort()
  },

  methods: {
    dragSort () {
      const el = document.querySelector('.el-table__body-wrapper > table > tbody')
      const sortable = new Sortable(el, {
        group: 'sort-move-drag',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        onEnd: evt => {
          const arr = this.tableData // 获取表数据
          arr.splice(evt.newIndex, 0, arr.splice(evt.oldIndex, 1)[0]) // 数据处理，获取最新的表格数据
          console.log('拖拽后',arr)

          // const curRow = this.tableData.splice(evt.oldIndex, 1)[0]
          // this.tableData.splice(evt.newIndex, 0, curRow)
          // this.updateSort() 更新数据库，将排序后的数据传给后端
        }
      })
      // console.log('数据', sortable)
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
