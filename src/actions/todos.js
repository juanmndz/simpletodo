/**
 * SPEC
 *
 * Create a todos
 * List all todos
 * Delete a todos
 * Deleted all completed todos
 */
import TodoApi from '../utils/api/todoApi';

export const CREATE_TODO = 'CREATE_TODO';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_ERROR = 'CREATE_TODO_ERROR';

export const COMPLETED_TODO = 'COMPLETED_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETED_ALL_COMPLETED_TODO = 'DELETED_ALL_COMPLETED_TODO';

export function createTodo(text) {
  return async (dispatch) => {
    dispatch({ type: CREATE_TODO });

    try {
      const data = await TodoApi.createTodo({ text });
      return dispatch({ type: CREATE_TODO_SUCCESS, data });

    } catch (error) {
      return ({
        type: CREATE_TODO_ERROR,
        error,
      });
    }
  }
}

export function completedTodo(id) {
  return {
    type: COMPLETED_TODO,
    id
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function deletedAllCompletedTodo() {
  return {
    type: DELETED_ALL_COMPLETED_TODO,
  }
}
