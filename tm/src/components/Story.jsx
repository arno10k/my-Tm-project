import React from 'react';
import './Story.css';

// LOOK HERE: We added onClick inside these parentheses!
function Story({ username, userPic, onClick }) {
  return (
    // So that this line knows what to do when clicked:
    <div className="story-circle-container" onClick={onClick}>
      <div className="placeholder-story-image"></div>
      <p className="story-username">{username}</p>
    </div>
  );
}

export default Story;