import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hello from './Hello';
import MyComponent from './my/MyComponent';
import Like from './my/Like';
import Person from './my/Person';
import MyApp from './todolist/MyApp';


ReactDOM.render(<App />, document.getElementById('root') );

ReactDOM.render(<Hello />, document.getElementById('hello') );


ReactDOM.render(<Like />, document.getElementById('like') );

const p1 = {
  name:'tom',
  age : 35 ,
  sex :'man'
}
//ReactDOM.render(<Person name={p1.name} age={p1.age} sex={p1.sex}></Person>, document.getElementById('person') );

/*【难点】 ...的作用 
1、打包  function fun1(...as) {}  
fun1(1,2,3)
2、解包(拆包) ，也适用拆数组、拆对象
const arr1 =[1,2,3]  
const arr2 = [6, ...arr1 ,9]
*/
ReactDOM.render(<Person {...p1}/>, document.getElementById('person') );
const p2 = {
  name:'jack'
}

ReactDOM.render(<Person name={p2.name} age={12}></Person>, document.getElementById('person1') );

ReactDOM.render(<MyComponent />, document.getElementById('mycomponet') );

ReactDOM.render(<MyApp />, document.getElementById('todolist') );

