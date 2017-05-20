/**
 *
 * SPEC
 *
 * Create a todo
 * List all todos
 * Click for completed todo
 * Delete a todo
 * Deleted all completed todos
 *
 *
 */

import TodoApi from '../utils/api/todoApi';
import uuid from 'uuid/v4';

export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

export const CREATE_TODO = 'CREATE_TODO';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_ERROR = 'CREATE_TODO_ERROR';


export const COMPLETED_TODO = 'COMPLETED_TODO';
export const DELETED_TODO = 'DELETED_TODO';
export const DELETED_ALL_COMPLETED_TODO = 'DELETED_ALL_COMPLETED_TODO';

export function fetchTodos() {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS });
    try {
      const data = await TodoApi.getAllTodo();
      return dispatch({ type: FETCH_TODOS_SUCCESS, data });
    } catch (error) {
      return dispatch({
        type: FETCH_TODOS_ERROR,
        error,
      });
    }
  }
}

export function createTodo(text) {
  return async (dispatch, getState) => {

    const todo = {
      text,
      id: uuid(),
      completedTodo
    }
    dispatch({ type: CREATE_TODO, todo });

    try {
      await TodoApi.createTodo({ todo });

      return dispatch({ type: CREATE_TODO_SUCCESS });
    } catch (error) {
      return dispatch({
        type: CREATE_TODO_ERROR,
        error,
        todo
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

export function deletedTodo(id) {
  return {
    type: DELETED_TODO,
    id
  }
}

export function deletedAllCompletedTodo() {
  return {
    type: DELETED_ALL_COMPLETED_TODO,
  }
}
