const getters = {
  carList(state) {
    return state.carList
  },
  carCount(state, getters) {
    return getters.carList.length
  }
}
export default getters