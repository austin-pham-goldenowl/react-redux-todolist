//todos reducer
const todos = (state = [], action) => {
  
  switch (action.type) {
    //add todo reducer
    case 'ADD_TODO':
      return [
        ...state,
        //return new state
        {
          id: action.id,
          item: action.item,
          date: (action.date.getDate()<10 ? ('0' + action.date.getDate()) : action.date.getDate()) + "-" + ((action.date.getMonth() + 1 < 10) ? ('0' + (action.date.getMonth() + 1)) : (action.date.getMonth() + 1)) + "-" + ((action.date.getFullYear()%100<10) ? ('0'+action.date.getFullYear()%100) : action.date.getFullYear()%100),
          note: action.note,
          completed: false,
          deleted: false,
        }
      ]

    //toggle todo reducer
    case 'TOGGLE_TODO':
    //return state with completed state reversed
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )

    //delete todo reducer
    case 'DELETE_TODO':
    //return state with completed state reversed
      return state.map(todo =>
        todo.id === action.id ? { ...todo, deleted: !todo.deleted } : todo
      )

    default:
      return state
  }
}

export default todos
