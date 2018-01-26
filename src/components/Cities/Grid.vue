<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(city, idx) in cities" :key="idx">{{city}}</li>
      <li v-if="!cities.length && !firstSearch" class="list-group-item">Nenhuma cidade encontrada.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'grid',
  props: {
    cities: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      firstSearch: true
    }
  },
  watch: {
    cities () {
      this.firstSearch = false
    }
  }
}
</script>

<style lang="css">
</style>
