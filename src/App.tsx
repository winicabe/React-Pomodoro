import { Component, useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState<number>(0)
  
  useEffect(()=>{
    const time = setInterval(()=>{
      setSeconds(seconds-1)
      if (seconds <= 0){
        setSeconds(seconds + 59)
        setMinutes(minutes-1)
      }
    },100)
    return () => clearInterval(time)
  }, [seconds, minutes])    

  
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>{minutes}:{seconds}</h1>
      </header>
    </div>
  )
}

export default App
