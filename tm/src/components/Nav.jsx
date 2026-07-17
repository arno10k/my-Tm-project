import React from 'react';
import { Link } from 'react-router-dom';
import soccer from '../assets/soccer.png';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-icons">
        <Link to="/" style={{ color: 'inherit' }}><i className="fas fa-home"></i></Link>
        <Link to="/messages" style={{ color: 'inherit' }}><i className="fas fa-comment-alt"></i></Link>
        <Link to="/explore" style={{ color: 'inherit' }}><i className="fas fa-compass"></i></Link>
        <Link to="/notifications" style={{ color: 'inherit' }}><i className="fas fa-heart"></i></Link>
      </div>
      <Link to="/profile">
        <img src={soccer} alt="profile" className="profile-pic" />
      </Link>
      
    </nav>
  );
}

export default Nav;
