import uuid from "uuid/v4";

import {
  CREATE_TODO,
  CREATE_TODO_ERROR,
  CREATE_TODO_SUCCESS,
  COMPLETED_TODO,
  DELETE_TODO,
  DELETED_ALL_COMPLETED_TODO,
} from "../actions/todos";

const INITIAL_STATE = {
  data: [],
  error: null,
  isFetched: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return state;
    case CREATE_TODO_SUCCESS;
    return [
      ...state,
      isFetched: true,
      data: [
        ...state.data,
        action.data
      ]
    ];
    case CREATE_TODO_ERROR;
    case COMPLETED_TODO:
      return state.map(
        todo =>
          todo.id === action.id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case DELETED_ALL_COMPLETED_TODO:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
