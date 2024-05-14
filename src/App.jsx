import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavMenu from './components/NavMenu/NavMenu.jsx'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="container mx-auto px-4">

      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="#/" /> {/* 👈 Renders at /app/ */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/test" element={<test />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;