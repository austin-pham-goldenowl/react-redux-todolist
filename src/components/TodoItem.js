import React from 'react';
import PropTypes from 'prop-types'

//                  onClick passed down from TodoList
const TodoItem = ({ onClick, completed, item }) => (
	<li
	onClick={onClick}
	style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
		{item}
	</li>
)

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired
}

export default TodoItem;