let visibleGameReducer = function reducer(error = false, action) {
  switch (action.type) {
    case 'TXID_NOT_FOUND':
      return error = true
    default:
      return error
  }
}
export default visibleGameReducer
