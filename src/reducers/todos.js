//todos reducer
const todos = (state = [], action) => {
  switch (action.type) {
    //add todo reducer
    case "ADD_TODO":
      let dateString =
        (action.date.getDate() < 10
          ? "0" + action.date.getDate()
          : action.date.getDate()) +
        "-" +
        (action.date.getMonth() + 1 < 10
          ? "0" + (action.date.getMonth() + 1)
          : action.date.getMonth() + 1) +
        "-" +
        (action.date.getFullYear() % 100 < 10
          ? "0" + (action.date.getFullYear() % 100)
          : action.date.getFullYear() % 100);
      return [
        ...state,
        //return new state
        {
          id: action.id,
          item: action.item,
          date: action.date,
          formattedDate: dateString,
          note: action.note,
          completed: false,
          deleted: false
        }
      ];

    //toggle todo reducer
    case "TOGGLE_TODO":
      //return state with completed state reversed
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "UPDATE_TODO":
      let newDateString =
        (action.newDate.getDate() < 10
          ? "0" + action.newDate.getDate()
          : action.newDate.getDate()) +
        "-" +
        (action.newDate.getMonth() + 1 < 10
          ? "0" + (action.newDate.getMonth() + 1)
          : action.newDate.getMonth() + 1) +
        "-" +
        (action.newDate.getFullYear() % 100 < 10
          ? "0" + (action.newDate.getFullYear() % 100)
          : action.newDate.getFullYear() % 100);
      // console.log('action', action.newItem, action.newNote, action.newDate)
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              item: action.newItem,
              date: action.newDate,
              formattedDate: newDateString,
              note: action.newNote
            }
          : todo
      );

    //delete todo reducer
    case "DELETE_TODO":
      //return state with completed state reversed
      return state.map(todo =>
        todo.id === action.id ? { ...todo, deleted: !todo.deleted } : todo
      );

    default:
      return state;
  }
};

export default todos;
