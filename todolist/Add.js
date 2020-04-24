import React from 'react';

class Add extends React.Component {
 
   constructor(props){
     super(props);
     this.add= this.add.bind(this);
  }
  // 子组件 改父组件状态 ：
   add() {
    const  todo=this.todoinput.value.trim();
    if(!todo){
      return 
    }

    this.props.addTodo(todo);
  }

  render (){
    
    return (
     <div>
       <input  type="text" ref={input => this.todoinput = input }/>
      <button onClick={this.add} >add #{this.props.count +1}</button>
     </div>
    )
  }
}

export default Add;
