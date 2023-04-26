import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#535bf2')
  const [isHovered, setIsHovered] = useState(false)
    const randomColorHandler = () => {
      const randomHex = () => Math.floor(Math.random() * 16).toString(16);
      setColor(`#${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}`)
    }

  return (
    <div className='wrapper'>
      <h1>Random color</h1>
        <div style={{backgroundColor: color, filter: isHovered ? `drop-shadow(0 0 2em ${color})` : ''}} className='rect' onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}></div>
      <div className='info-container'>
        <h2 style={{marginTop: '24px'}}>Color is: {color}</h2>
        <button onClick={() => setColor(randomColorHandler)}>
          shuffle
        </button>
      </div>
    </div>
  )
}

export default App
