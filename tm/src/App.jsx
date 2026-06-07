import { useState } from 'react'
import Nav from './components/Nav'
import Bio from './components/Bio'
import Gallery from './components/Gallery'
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
          {/* This is your empty screen for now! You can leave it totally empty or add a placeholder */}
          <h2>Home Feed Coming Soon!</h2>
        </div>
      )}
    </div>
  )
}

export default App
