import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import MyProfile from './components/MyProfile';
import Messages from './components/Messages';
import Explore from './components/Explore';
import Notifications from './components/Notifications';
import Footer from './components/Footer'; 
import './App.css';


function LayoutWrapper({ isAuthenticated, setIsAuthenticated }) {
  const location = useLocation();
 
  const hideLayout = location.pathname === '/';

  return (
    <div className="app-container">
      {!hideLayout && <Nav />}
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        

        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        <Route path="/profile" element={isAuthenticated ? <MyProfile /> : <Navigate to="/" />} />
        <Route path="/messages" element={isAuthenticated ? <Messages /> : <Navigate to="/" />} />
        <Route path="/explore" element={isAuthenticated ? <Explore /> : <Navigate to="/" />} />
        <Route path="/notifications" element={isAuthenticated ? <Notifications /> : <Navigate to="/" />} />
      </Routes>


      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  });

  return (
    <Router>
      <LayoutWrapper isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </Router>
  );
}

export default App;