<template>
  <div>
    <div class="form-group">
      <label>Termo da Busca: {{searchTerm}}</label>
      <input
        type="text"
        class="form-control"
        placeholder="Digite o termo de busca"
        v-model="searchTerm"
        @keyup="fetch"
      >
    </div>
  </div>
</template>

<script>
import Cities from '../../services/Cities'

export default {
  name: 'search',
  data () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    fetch () {
      const response = Cities.fetch(this.searchTerm)
      this.$store.dispatch('setSearchTerm', this.searchTerm)
      this.$emit('on-search', response)
    }
  }
}
</script>

<style scoped>
  input {
    color: #dd0000 !important;
  }
</style>
