let txid_reducer = function reducer(showTXID_Error = false, action) {
  switch (action.type) {
    case 'UPDATE_ERROR_STATUS':
      return showTXID_Error = !showTXID_Error
    default:
      return showTXID_Error
  }
}
export default txid_reducer
