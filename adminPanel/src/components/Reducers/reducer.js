function reducer (state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {...state, products: action.products}
  
    default:
      break;
  }
}

export default reducer