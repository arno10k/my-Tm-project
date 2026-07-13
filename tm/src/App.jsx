import { useState } from 'react'
import Nav from './components/Nav'
import Bio from './components/Bio'
import Gallery from './components/Gallery'
import Home from './components/Home'
import './App.css'


function App() {
  // 1. Create a state to track the current page (default to 'profile')
  const [currentView, setCurrentView] = useState('profile')

  return (
    <div className="app-container">
      {/* 2. Pass the function to change the view into your Nav */}
      <Nav setCurrentView={setCurrentView} />
      
      {/* 3. Tell React what to show based on the currentView */}
      {currentView === 'profile' ? (
        <div className="container">
          <Bio />
          <Gallery />
        </div>
      ) : (
        <div className="home-container">
          <Home />
        </div>
      )}
    </div>
  )
}

export default App
