import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0);
  return (

    <div className="App">
      <Navbar />
      <div className="childs">
        <Outlet />
      </div>
    </div>
  )
}

export default App
