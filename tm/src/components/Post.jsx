import React, { useState } from 'react';
import './Post.css'; // We will create this later for styling!

function Post() {
  return (
    <div className="post-card-container">
      <div className="post-header">
        <div className="placeholder-avatar"></div>
        <h4>Username Placeholder</h4>
      </div>
      
      <div className="post-image-placeholder">
        <p>Image Goes Here</p>
      </div>
      
      <div className="post-footer">
        <p><strong>Username Placeholder</strong> This is where the caption will go when we add the real data.</p>
      </div>
    </div>
  );
}

export default Post;
