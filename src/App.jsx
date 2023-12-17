import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navs from './projet/nav'
import logo from './image/logo.jpg'
import ProductList from './projet/home'
import Router from './projet/router'
import Footer from './projet/footer'
import Contact from './projet/contact'
import Login from './projet/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router />
    </>
  )
}

export default App
