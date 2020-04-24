import React from 'react';

function App() {
  const msg="I LIKE YOU";
  const myId="ZhaiMingMing";


  return (
    
    <h3 id ={ myId.toUpperCase() }>{ msg.toLowerCase() }</h3>
    
  );
}

export default App;
