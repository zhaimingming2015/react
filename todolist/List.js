import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
 
  // constructor(props){
  //   super(props);
  // }

 render (){

  const {todothings}= this.state;
    //  => 有2个作用 ：代表函数和 返回
   //{todothings.map((todo ,index) => <li key={index}>{todo}</li>)}
    // 加了{}之后 ，=> 后面就是函数体 得加return
   //{todothings.map((todo ,index) => { return <li key={index}>{todo}</li> })}
   return (
    <div>
      {todothings.map((todo ,index) => {return <li key={index}>{todo}</li> })}
      
    </div>
   )
 }
}

List.propTypes = {
  todothings :PropTypes.array.isRequired
}

export default List;
