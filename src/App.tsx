import { Component, useEffect, useState } from 'react'
import './App.css'

const music = document.querySelector('audio')
function App() {
  
  const [minutes, setMinutes] = useState<number>(5)
  const [seconds, setSeconds] = useState<number>(0)
  
  useEffect(()=>{
    
    const time = setInterval(()=>{
      if(minutes === 0 && seconds === 0){
        music.play();
        return clearInterval(time)
      }else{
        setSeconds(seconds-1)
      }
      
      if (seconds <= 0){
        setSeconds(seconds + 59)
        setMinutes(minutes-1)
      }
    },100)
    return () => clearInterval(time)
  }, [seconds, minutes])    

  
    
  return (
    <div className="App">
      <header>
        <h1>Simple-Pomodoro</h1>
      </header>
      <main className="App-header">
        <section>
          <p>Click no napágina antes de chegar a zero para habilitar o som. <br/> <em><b>página em desenvolvimento logo o recurso será implementado corretamente</b></em></p>
          <h2>{minutes}:{seconds}</h2>
        </section>
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export default App
