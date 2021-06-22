import React from 'react';
import ReactDOM from 'react-dom';

function Actions({metSumar,metRestar}) {
    return (
      <div className="App">
        <button onClick={metSumar}>Sumar</button>
        <button onClick={metRestar}>Restar</button>
      </div>
    );
  }
  
  export default Actions;