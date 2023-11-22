import React from 'react'
import Header from './components/Head/Header'
import "./App.css"
import Home from "./components/Hero/Home"
import Features from "./components/Features/Features"
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Testimonial from './components/Testimonial/Testimonial'

const App = () => {
  return (
  <>
    <Header />
    <Home />
    <Features />
    <Portfolio />
    <Resume />
    <Testimonial />
 </>
 )

}

export default App