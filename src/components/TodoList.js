import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo }) => (
  //render TodoLis
  <div>
    <center>
      <br />
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          onItemClick={() => toggleTodo(todo.id)}
          onDeleteClick={() => deleteTodo(todo.id)}
          onUpdateClick={(newItem, newDate, newNote) =>
            updateTodo(todo.id, newItem, newDate, newNote)
          }
        />
      ))}
    </center>
  </div>
);

//propTypes
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      deleted: PropTypes.bool.isRequired,
      item: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      formattedString: PropTypes.string.isRequired,
      note: PropTypes.string
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired
};

export default TodoList;
