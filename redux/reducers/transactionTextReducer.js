let transactionTextReducer = function reducer(blockchainText = "", action) {
  switch (action.type) {
    case 'UPDATE_CURRENT_TXID':
      var { hex } = action.transaction.outputs[1].script_pub_key
      console.log("hex: " + hex)
      var hex = hex.toString();
      var str = '';
      for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  	  str = str.substr(2)
      return blockchainText = str
    default:
      return blockchainText
  }
}
export default transactionTextReducer
