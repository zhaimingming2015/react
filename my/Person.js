import React from 'react';
import PropTypes from 'prop-types';

function Person (props) {

    return (
        <ul>
            <li>name:{props.name}</li>
            <li>age:{props.age}</li>
            <li>sex:{props.sex}</li>
        </ul>
    )
    
  }

  //指定默认属性值
  Person.defaultProps ={
      sex: '男',
      age :22
  }
  // 指定属性值的类型 和必要性
  Person.propTypes = {
      name : PropTypes.string.isRequired,
      age : PropTypes.number
  }
export default Person;
