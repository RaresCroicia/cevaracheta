import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rocket from './Rocket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> 
        ceva
      </h1>
      <Rocket position="left" maxFly={50}/>
      <Rocket position="right" maxFly={50}/>
    </>
  )
}

export default App
