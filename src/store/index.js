import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  searchTerm: ''
}

const mutations = {
  GET_SEARCH_TERM (state) {
    return state.searchTerm
  },

  SET_SEARCH_TERM (state, searchTerm) {
    state.searchTerm = searchTerm
  }
}

const actions = {
  getUser ({commit}) {
    commit('GET_SEARCH_TERM')
  },

  setSearchTerm ({commit}, searchTerm) {
    commit('SET_SEARCH_TERM', searchTerm)
  }
}

const getters = {
  getSearchTerm: state => state.searchTerm
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
