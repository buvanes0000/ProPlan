import React from 'react'
import { Footer, Form, Hero, MostPopular, Navbar } from './components'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Hero/>
        <MostPopular/>
        <Form/>
        <Footer/>
      
    </div>
  )
}

export default App
