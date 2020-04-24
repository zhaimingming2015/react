import React from 'react';

class Like extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isLikeMe : false
        }

        //将新增方法中的this 强制绑定为组件对象 【难点】
        this.handleClick = this.handleClick.bind(this)
    }

    //新添加的方法 ： 内部的this默认不是组件对象
    handleClick (){

        const isLikeMe= !this.state.isLikeMe
        this.setState({ isLikeMe })
        //等价整个写法  ES6语法 【知识点】
        //this.setState({ isLikeMe : isLikeMe })
    }

    //重写组件类的方法
    render (){
     
        //const isLikeMe =this.state.isLikeMe ;
        //结构赋值 ES6语法 【知识点】
        const {isLikeMe} = this.state
    return <h2 onClick={this.handleClick} >{isLikeMe ?'you like me':'I like you'}</h2>
    //在这里绑定也可以 那样就在构造器里不用绑定了 但这个效率低
    //return <h2 onClick={this.handleClick.bind(this)} >{isLikeMe ?'you like me':'I like you'}</h2>
    }
  }

export default Like;