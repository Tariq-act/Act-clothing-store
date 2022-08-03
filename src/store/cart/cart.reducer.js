import { CART_ACTION_TYPE } from './cart.types';

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  // cartCount: 0,
  // cartTotal: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      return state;
  }
};
