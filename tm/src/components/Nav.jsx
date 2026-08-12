import React from 'react';
import { Link } from 'react-router-dom';
import soccer from '../assets/soccer.png';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav-bar-custom">
      
      {/* LEFT SIDE: PROFILE */}
      <Link to="/profile" className="nav-hover-item" style={{ color: 'inherit', textDecoration: 'none' }}>
        <img src={soccer} alt="profile" className="nav-icon-target profile-pic" />
        <span className="nav-hover-label">Profile</span>
      </Link>

      {/* RIGHT SIDE: THE 4 ICONS GROUPED CLOSE TOGETHER */}
      <div className="nav-right-group">
        <Link to="/" className="nav-hover-item" style={{ color: 'inherit', textDecoration: 'none' }}>
          <i className="fas fa-home nav-icon-target"></i>
          <span className="nav-hover-label">Home</span>
        </Link>

        <Link to="/messages" className="nav-hover-item" style={{ color: 'inherit', textDecoration: 'none' }}>
          <i className="fas fa-comment-alt nav-icon-target"></i>
          <span className="nav-hover-label">Messages</span>
        </Link>

        <Link to="/explore" className="nav-hover-item" style={{ color: 'inherit', textDecoration: 'none' }}>
          <i className="fas fa-compass nav-icon-target"></i>
          <span className="nav-hover-label">Explore</span>
        </Link>

        <Link to="/notifications" className="nav-hover-item" style={{ color: 'inherit', textDecoration: 'none' }}>
          <i className="fas fa-heart nav-icon-target"></i>
          <span className="nav-hover-label">Requests</span>
        </Link>
      </div>

    </nav>
    
  );
}

export default Nav;
