//actions creators

//initial todo id
let nextTodoItem = 0;

//addTodo action
export const addTodo = (item, date, note) => ({
  type: "ADD_TODO",
  //id = nextTodoItem then +1
  id: nextTodoItem++,
  item,
  date,
  note
});

//toggleTodo action
export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const updateTodo = (id, newItem, newDate, newNote) => ({
  type: "UPDATE_TODO",
  //id = nextTodoItem then +1
  id,
  newItem,
  newDate,
  newNote
});

//deleteTodo action
export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});
