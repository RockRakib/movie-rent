export const initialState = {
  addToCart: [],
};
export const CartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      return { addToCart: [...state.addToCart, action.payload] };

    case "removeFromCart":
      return {
        ...state,
        addToCart: state.addToCart.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
