import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer, singleProductReducer } from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: singleProductReducer,
    cart: cartReducer,

})
const cartItemsFromLocalStorage = localStorage.getItem('cartItems') 
? JSON.parse(localStorage.getItem('cartItems'))
: []

const intialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
    }
}

const middleWare = [thunk]
const store = createStore(reducer, intialState,applyMiddleware(...middleWare))

export default store



