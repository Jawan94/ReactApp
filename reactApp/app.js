import React from 'react';
import ReactDOM from 'react-dom';
var dummyData = ['shower', 'sleep', 'eat', 'workout', 'study']


class TodoList extends React.Component {
constructor(props) {
  super(props);
}
render() {
  return (
  <ul>
   {dummyData.map((item) => <Todo task = {item}/>)}
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
    {this.props.task} </li>
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
  super(props)
}
  render() {
    return(
      <div>
  <InputLine/>
  <TodoList/>
  </div>
    )
  }
}


ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
