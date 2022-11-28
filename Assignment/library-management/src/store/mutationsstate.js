export default {
  appendData: (state, add) => {
    state.details.push(add)
  },
  updatedStatus: (state, { index, status }) => {
    state.details[index].status = status
  }
}
