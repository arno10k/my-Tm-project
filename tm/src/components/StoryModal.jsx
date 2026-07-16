import React from 'react';
import './StoryModal.css';

function StoryModal({ story, onClose }) {
  return (
    <div className="story-modal-overlay" onClick={onClose}>
      <div className="story-modal-box" onClick={(e) => e.stopPropagation()}>
        
        {/* TOP LEFT HEADER: Profile pic and username */}
        <div className="story-modal-header">
          <img src={story.userPic} alt={story.username} className="story-modal-avatar" />
          <span className="story-modal-username">{story.username}</span>
        </div>

        <button className="close-button" onClick={onClose}>&times;</button>
        
        <img src={story.image} alt="Full Story" className="story-modal-image" />
        
        {/* BOTTOM CAPTION: Only renders if you wrote a caption */}
        {story.caption && (
          <div className="story-modal-caption">
            <p>{story.caption}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default StoryModal;