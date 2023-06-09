
<template>
  <div class="el-autocomplete-tag">
    <el-autocomplete
      v-model="inputValue"
      :fetch-suggestions="querySearchAsync"
      :placeholder="placeholder"
      :data="tags"
      @select="handleSelect"
    ></el-autocomplete>
    <div class="el-autocomplete-tag__tags">
      <el-tag
        v-for="(tag, index) in selectedTags"
        :key="index"
        closable
        @close="handleClose(tag)"
      >{{ tag }}</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutocompleteTag',
  props: {
    placeholder: {
      type: String,
      default: '请输入标签'
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      inputValue: '',
      selectedTags: [],
      tagLimit: 5
    }
  },
  created () {
    this.selectedTags = this.tags.slice(0, this.tagLimit)
  },
  methods: {
    handleSelect (item) {
      if (this.selectedTags.length < this.tagLimit) {
        console.log(item)
        this.selectedTags.push(item.value)
      } else {
        this.$message.warning(`最多只能添加 ${this.tagLimit} 个标签`)
      }
      this.inputValue = ''
    },
    handleClose (tag) {
      const index = this.selectedTags.indexOf(tag)
      if (index !== -1) {
        this.selectedTags.splice(index, 1)
      }
    },
    async querySearchAsync (queryString, cb) {
      console.log(queryString)
      // 在这里处理异步获取标签列表的逻辑
      // 模拟数据
      const data = ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React', 'Angular']
      const suggestions = data.filter(item => item.toLowerCase().indexOf(queryString.toLowerCase()) !== -1)
      cb(suggestions.map(item => ({ value: item, label: item })))
    }
  }
}
</script>

<style scoped>
.el-autocomplete-tag__tags {
  margin-top: 10px;
}

.el-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
