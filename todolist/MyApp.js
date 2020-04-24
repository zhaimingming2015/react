import React from 'react';
import Add from './Add';
import List from './List';


class MyApp extends React.Component {
 
  constructor(props){
    super(props);
    this.state ={
      todothings : ['eat','sleep','rest','gg']
    }

    this.addTodo= this.addTodo.bind(this);
 }

 addTodo(todo) {
  const {todothings} =this.state ;
  todothings.unshift(todo);
  this.setState({todothings});
}

 render (){

  const {todothings}=this.state ;
   
   return (
    <div>
        <h1>simple todolist example</h1>
        <Add count={todothings.length} todo={this.addTodo}/>
        <List  todothings={todothings}/>
    </div>
   )
 }
}

export default MyApp;
