//actions creators

//initial todo id
let nextTodoItem = 0

//addTodo action
export const addTodo = item => ({
	type: "ADD_TODO",
	//id = nextTodoItem then +1
	id: nextTodoItem++,
	item
})

//toggleTodo action
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
}) 