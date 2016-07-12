let visibleGameReducer = function reducer(transaction = {}, action) {
  switch (action.type) {
    case 'UPDATE_CURRENT_TXID':
      return transaction = action.transaction
    default:
      return transaction
  }
}
export default visibleGameReducer
