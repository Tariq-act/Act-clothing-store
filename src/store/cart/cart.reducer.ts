import { AnyAction } from 'redux';

import { setCartItems, setIsCartOpen } from './cart.action';

import { CartItem } from './cart.types';

export type CartState = {
  readonly isCartOpen: boolean,
  readonly cartItems: CartItem[]
}

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
  // cartCount: 0,
  // cartTotal: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {

  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {

    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state

  // switch (type) {
  //   case CART_ACTION_TYPE.SET_CART_ITEMS:
  //     return {
  //       ...state,
  //       cartItems: payload,
  //     };
  //   case CART_ACTION_TYPE.SET_IS_CART_OPEN:
  //     return {
  //       ...state,
  //       isCartOpen: payload,
  //     };

  //   default:
  //     return state;
  // }
};
