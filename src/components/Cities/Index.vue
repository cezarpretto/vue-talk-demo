<template>
  <div>
    <h1 class="text-center">{{ msg }}</h1>
    <div class="row">
      <div class="col-sm-12">
        <search @on-search="(vl) => cities = vl" />
        Número de cidades encontradas: {{rows}}
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <grid :cities="cities" />
      </div>
      <div class="col-sm-6">
        <reverse />
        <termList />
      </div>
    </div>
  </div>
</template>

<script>
import Search from './Search.vue'
import Grid from './Grid.vue'
import Reverse from './Reverse.vue'
import TermList from './TermList.vue'

export default {
  name: 'Cities',
  data () {
    return {
      msg: 'Hello Campus Party',
      cities: []
    }
  },
  mounted () {
    console.log('Mounted')
  },
  methods: {
    foo () {
      this.msg = 'bar'
    }
  },
  computed: {
    rows () {
      return this.cities.length
    }
  },
  components: {
    Search,
    Grid,
    Reverse,
    TermList
  }
}
</script>

<style scoped>
  h1 {
    color: #0099ff;
    font-weight: bold;
  }
</style>
