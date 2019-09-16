import React from "react";
import AddTodoCont from "../containers/AddTodoCont";
import TodoList from "../containers/TodoList";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//layout components
const App = ({ logout }) => (
  <div>
    <div style={{ textAlign: "right", marginRight: 10 }}>
      <Typography variant="subtitle1" gutterBottom>
        Hi An
        <Button color="secondary" onClick={logout} style={{ marginLeft: 5 }}>
          Logout
        </Button>
      </Typography>
    </div>

    <div>
      <AddTodoCont />
      <TodoList />
    </div>
  </div>
);

export default App;
