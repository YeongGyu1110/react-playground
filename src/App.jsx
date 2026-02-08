import { useState } from 'react';
import './App.css'

function App() {

  const [number, setNumber] = useState(1);
  const numberPlusOne = () => {
    setNumber(number + 1);
  }


  return (
    <div className='App'>
      <header>
        <h3 className='leading'>▧</h3>
        <h1 style={{ fontSize: "18.7px" }}>title</h1>
      </header>
      <main>
        <div className='number-container' onClick={numberPlusOne}>
          <p className='number' draggable="true">{number}</p>
        </div>
      </main>
    </div>
  )
}

export default App
