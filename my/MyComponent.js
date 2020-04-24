import React from 'react';

class MyComponent extends React.Component {
 

   constructor(props){
     super(props);

     this.handleClick = this.handleClick.bind(this)
     this.handleBulur = this.handleBulur.bind(this)
  }
  handleClick (){
    //const input =this.refs.cont
    //alert(input.value)
    alert(this.inp.value)
  }

  handleBulur (event){

    alert(event.target.value)
  }

  //回调函数 输入值绑定到组件对象上
  //<input type="text" ref={(input) => this.input =input }/> &nbsp;
  //等价于
  //<input type="text" ref={ input   => this.input =input }/> &nbsp; 回调函数
  render (){
    
    return (
      <div>

        <input type="text" ref="cont"/> &nbsp;
       
        <input type="text" ref={(inpu) => this.inp =inpu }/> &nbsp;
        <button onClick={this.handleClick} >提示输入</button> &nbsp;
        <input type="text" placeholder="失去焦点时提示内容" onBlur={this.handleBulur}/>
      </div>
    )
  }
}

export default MyComponent;
