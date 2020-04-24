import React from 'react';

function Hello() {

  // 将一个数据的数据转换 为一个标签数据 ： 使用数组的map()
    const names=['java','php','python','vue']

    //有嵌套时用（）
  return (
    <ul>
        
        { names.map( (name , index) => <li key={index}>{name}</li>  )}
    </ul>
  );
}

export default Hello;