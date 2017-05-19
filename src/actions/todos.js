/**
 * SPEC
 *
 * Create a todos
 * List all todos
 * Delete a todos
 * Deleted all completed todos
 */

export const CREATE_TODO = 'CREATE_TODO';

export function createTodo(text) {
  return {
    type: CREATE_TODO,
    text
  }
}
