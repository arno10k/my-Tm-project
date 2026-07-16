import React from 'react';
import './Story.css';

function Story({ username, userPic, onClick }) {
  return (
    <div className="story-circle-container" onClick={onClick}>
      <img src={userPic} alt={username} className="placeholder-story-image" />
      <p className="story-username">{username}</p>
    </div>
  );
}

export default Story;