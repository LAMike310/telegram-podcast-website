let errorMessageReducer = function reducer(errorMessage = "", action) {
  switch (action.type) {
    case 'ERROR_FOUND':
      return errorMessage = action.errorMessage
    default:
      return errorMessage
  }
}
export default errorMessageReducer
