import Vue from 'vue'
import Router from 'vue-router'
import Cities from '@/components/Cities/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cities',
      component: Cities
    }
  ]
})
