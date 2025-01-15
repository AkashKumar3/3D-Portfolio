import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import Projects from './pages/Projects'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </main>
  )
}

export default App