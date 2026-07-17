import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Bio from './components/Bio';       /* Brought this back! */
import Gallery from './components/Gallery'; /* Brought this back! */

// The new pages (Make sure the files have Capital letters now!)
import Messages from './components/Messages';
import Explore from './components/Explore';
import Notifications from './components/Notifications';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* YOUR CORRECT PROFILE SETUP: */}
          <Route path="/profile" element={
            <>
              <Bio />
              <Gallery />
            </>
          } />
          
          {/* THE NEW ROUTES: */}
          <Route path="/messages" element={<Messages />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
