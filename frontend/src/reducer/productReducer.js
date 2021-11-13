
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PROODUCT_LIST_REQUEST":
      return { loading: true, products: [] };

    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    
    default:
        return state
  }
};


export const singleProductReducer = (state = {product: {} }, action) => {
    
  switch (action.type){

      case "SINGLE_PRODUCT_REQUEST": 
          return { loading: true, ...state}
      
      case 'SINGLE_PRODUCT_SUCCESS':
          return { loading: false, product: action.payload}
      default :
          return state   
  }

}

