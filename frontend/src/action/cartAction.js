import axios from "axios"

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);

  dispatch({
    type: "ADD_TO_CART",
    payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price
    } 
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const remveFromCart = (id) => (dispatch, getState) => {

  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: id
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}
