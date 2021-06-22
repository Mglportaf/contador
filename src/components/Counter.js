import React from 'react';
import ReactDOM from 'react-dom';

function Counter({myprop}) {
    
    return (
      <div className="App">
        <p>Contador: {myprop}</p>
      </div>
    );
  }
  
  export default Counter;