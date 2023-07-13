import { useState } from 'react'
import Home from './components/home/Home'
import './styles.css'
import About from './components/about/About'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
<Home/>
<About/>
  </div>
  )
}

export default App
