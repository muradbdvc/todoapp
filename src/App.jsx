import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavMenu from './components/NavMenu/NavMenu.jsx'
import About from './components/NavMenu/About.jsx'
import Blog from './components/NavMenu/Blog.jsx'
import Contact from './components/NavMenu/Contact.jsx'

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
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;