import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";

//layout components
const App = () => (
  <div>
    <AddTodo />
    <TodoList />
  </div>
);

export default App;
