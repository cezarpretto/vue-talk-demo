<template>
  <div class="card card-body">
    <h2>Term to List:</h2>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="(x, idx) in list" :key="idx">{{x}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'termList',
  computed: {
    list () {
      return this.$store.getters.getSearchTerm.split('').filter(x => x !== ' ')
    }
  }
}
</script>

<style lang="css">
</style>
