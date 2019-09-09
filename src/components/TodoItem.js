import React from 'react';
import PropTypes from 'prop-types'

//                  onClick passed down from TodoList
const TodoItem = ({ onItemClick, onDeleteClick, completed, deleted, item }) => (
	<div>
		<li
		onClick={onItemClick}
		style={{
	      textDecoration: completed ? 'line-through' : 'none',
	      display: deleted ? 'none' : 'inline-block'
	    }}>
			{item} 
		</li>
		<button onClick={onDeleteClick} style={{
			marginLeft: 10,
	      display: deleted ? 'none' : 'inline'
	    }}>x</button>
	</div>
)

TodoItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired
}

export default TodoItem;