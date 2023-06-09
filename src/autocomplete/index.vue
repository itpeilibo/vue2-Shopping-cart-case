<template>
  <div>
    <AutocompleteTag :tags="tags" :placeholder="placeholder"></AutocompleteTag>
  </div>
</template>

<script>
import AutocompleteTag from '@/autocomplete/components/AutocompleteTag.vue'
export default {
  components: { AutocompleteTag },
  name: 'AutoComplete',
  data () {
    return {
      tags: ['tag1', 'tag2', 'tag3'],
      placeholder: '他科医生'
    }
  }
}
</script>

<style scoped>

</style>
