
import { Nav, Bio, Gallery } from './components'
import React from 'react'
import './App.css'

const App = () => {
  console.log('App component rendered')
  return (
    <>
    <Nav />
    <div className="container">
        <Bio />
        <Gallery />
    </div>
    </>
  )
}

export default App