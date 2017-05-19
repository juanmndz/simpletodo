import uuid from 'uuid/v4';

import { CREATE_TODO } from '../actions/todos';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
        }
      ];
    default:
      return state;
  }
};
