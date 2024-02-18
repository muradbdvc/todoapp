import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="container mx-auto px-4">
      <Nav title="Navbar" HomeMenu="  Home" />
          <Card titleText="Call Mother" descText="This is dummy description text. This is dummy description text. This is dummy description text1." />
          <Card titleText="Call Father" descText="This is dummy description text. This is dummy description text. This is dummy description text2."/>
          <Card titleText="Call Sister" descText="This is dummy description text. This is dummy description text. This is dummy description text3."/>
          <Card titleText="Call Son" descText="This is dummy description text. This is dummy description text. This is dummy description text4."/>
          <Card titleText="Call Wife" descText="This is dummy description text. This is dummy description text. This is dummy description text5."/>
          <Card titleText="Call Daughter" descText="This is dummy description text. This is dummy description text. This is dummy description text6."/>
    </div>

  )
}

export default App;