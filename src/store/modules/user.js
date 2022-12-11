export default {
  state: {
    user: {
      locale: 'ua'
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    clearUser(state) {
      state.user = {}
    },
  },
  actions: {
    async updateInfo({ commit, getters }, toUpdate) {
      try {
        const updateData = [{ getters, toUpdate }]
        commit('setUser', updateData)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
  },
  getters: {
    user: s => s.user,
  }
}
