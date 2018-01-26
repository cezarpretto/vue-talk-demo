<template>
  <div class="card card-body">
    <h2>Reverse Term: <span class="badge badge-danger">{{reverseTerm}}</span></h2>
  </div>
</template>

<script>
export default {
  name: 'reverse',
  computed: {
    reverseTerm () {
      return this.$store.getters.getSearchTerm.split('').reverse().join('')
    }
  }
}
</script>

<style lang="css">
</style>
