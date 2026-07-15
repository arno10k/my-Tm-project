import React from 'react';
import './StoryModal.css'; // This is the crucial line that makes it float!

function StoryModal({ onClose }) {
  return (
    <div className="story-modal-overlay" onClick={onClose}>
      
      <div className="story-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="story-modal-placeholder">
          <h2>Image goes here</h2>
        </div>
      </div>
      
    </div>
  );
}

export default StoryModal;
