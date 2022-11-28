export default {
  addDataActions: ({ commit }, addData) => {
    commit('appendData', addData)
  },
  changeStatus: ({ commit }, status) => {
    commit('updatedStatus', status)
  }
}
