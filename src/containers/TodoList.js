import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, updateTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  updateTodo: (id, item, date, note) => dispatch(updateTodo(id, item, date, note)),	
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)