import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
	//render TodoLis
	<ul>
	{todos.map(todo => 
		<TodoItem key={todo.id} {...todo} 
		onItemClick={() => toggleTodo(todo.id)} 
		onDeleteClick={() => deleteTodo(todo.id)} 
		/>)}	
	</ul>
)

//propTypes
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      deleted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoList