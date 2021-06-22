import logo from './logo.svg';
import './App.css';
import Actions from './components/Actions';
import Counter from './components/Counter';
import {useState} from 'react'

function App(props) {

  const [numbers,setNumbers]=useState(0);

  const dale= 8;

  const sumar=()=>{
    setNumbers(numbers+1);
  }
  const restar=()=>{
    setNumbers(numbers-1);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Counter myprop={numbers}/>
      <Actions metSumar={sumar} metRestar={restar}/>
    </div>
  );
}

export default App;
