import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="container mx-auto px-4">
      {/* nav-menu */}
      <Nav title="Navbar" HomeMenu="  Home" />
    </div>
  )
}


function Card(){
  const todoTitle = "Card Title";
  const todoDesc = "Card Title Card Title Card Title Card Title Card TitleCard TitleCard Title Card TitleCard Title Card Title Card Title Card Title";
  const date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth();
  const currentYear = date.getFullYear();

  return(
      <div className="card m-6 p-6">
        <h3 className='cardTitle'>{todoTitle}</h3>
        <p className='cardDesc'>{todoDesc}</p>
        <p className='cardDate'>{dateName+ "/" + monthName+ "/" + currentYear}</p>
      </div>
  )
}

export default Card;
