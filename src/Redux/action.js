export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const GET_TODO_ITEMS = "GET_TODO_ITEMS";
export const FETCHED_TODO_ITEMS = "FETCHED_TODO_ITEMS";

export const ADD_TO_BAG = "ADD_TO_BAG";
export const REMOVE_TO_BAG ="REMOVE_TO_BAG"
export const SAVED_BAG = "SAVED_BAG";
export const REMOVE_ALL_TO_BAG="REMOVE_ALL_TO_BAG"



export const savedBag = (payload) => ({
  type: SAVED_BAG,
  payload,
});

export const addingToBag = (payload) => ({
  type: ADD_TO_BAG,
  payload,
});
export const removeAllToBag = () => ({
  type: REMOVE_ALL_TO_BAG,
});
export const removeToBag = (payload) => ({
  type: REMOVE_TO_BAG,
  payload,
});

export const getCartData = (dispatch) => {
  return (dispatch) => {
    fetch("http://localhost:8080/cartProducts")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        dispatch(savedBag(res));
      });
  };
};


export const addTodoItem = (data) => ({
  type: ADD_TODO_ITEM,
  payload: data,
});

export const fetchedTodos = (todos) => ({
  type: FETCHED_TODO_ITEMS,
  payload: todos,
});
