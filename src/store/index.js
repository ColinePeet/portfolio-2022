import { createStore } from 'vuex'

export default createStore({
  state: {
    headerOpacity : false
  },
  getters: {
  },
  mutations: {
    set_header_opacity(state, value) {
      state.headerOpacity = value
    }
  },
  actions: {
  },
  modules: {
  }
})
