import React from 'react';
import ReactDOM from 'react-dom';


class TodoList extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    todos: []
  }
}
componentDidMount() {
  this.setState({todos: this.props.list})
}
render() {
  return (
  <ul>
   {this.state.todos.map((item) => <Todo task = {item}/>)}
  </ul>
    )
  }
}

class Todo extends React.Component {
constructor(props){
  super(props)
}
render() {
  return(
    <div>
    <li> <button className= "btn btn-default">x</button>
  {this.props.task.completed ? <strike>{this.props.task.taskText}</strike> : this.props.task.taskText}
     </li>
    </div>
  )
  }
}

class InputLine extends React.Component {
constructor(props){
  super(props)
}
render() {
return (
  <div>
  <input type="text" value=""/>
  <input type="submit" value="Add todo"/>
  </div>
    )
  }
}

class TodoApp extends React.Component {
constructor(props){
  super(props);
  this.state = {
    todos: [
      {taskText: 'shower', completed: true},
      {taskText: 'sleep', completed: false},
      {taskText: 'eat', completed: true},
      {taskText: 'workout', completed: false},
      {taskText: 'study', completed: true}
    ]
  }
}
  render() {
    return(
      <div>
  <InputLine/>
  <TodoList list = {this.state.todos}/>
  </div>
    )
  }
}


ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
