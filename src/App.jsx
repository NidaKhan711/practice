import React, { useContext } from 'react'
import { counterContext } from './Context/Context'
import Counter from './Components/Context/Counter';

const App = () => {
  const counterState =useContext(counterContext);
  console.log('context',counterState)
  return (
    <div className="app">
    <h1>count of a 0</h1>
    <Counter/>
    </div>
  )
}

export default App