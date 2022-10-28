import {
  ADD_TO_BAG,
  FETCHED_TODO_ITEMS,
  REMOVE_TO_BAG,
  REMOVE_ALL_TO_BAG,
  SAVED_BAG,
} from "./action";

const initialState = {
  product: [],
  cartProducts: [],
  wishList: [],
};

export const todoReducer = (store = initialState, action) => {
  switch (action.type) {
    case FETCHED_TODO_ITEMS:
      return {
        ...store,
        product: action.payload.filter(
          (task) => task.userID === store.userDetails.userEmail
        ),
      };

    case ADD_TO_BAG:
      return {
        ...store,
        cartProducts: [...store.cartProducts, action.payload],
      };

    case REMOVE_ALL_TO_BAG:
      return {
        ...store,
        cartProducts: [],
      };

    case REMOVE_TO_BAG:
      return {
        ...store,
        cartProducts: store.cartProducts.filter((id) => id !== action.payload),
      };
    case SAVED_BAG:
      return {
        ...store,
        cartProducts: action.payload,
      };
    default:
      return store;
  }
};
