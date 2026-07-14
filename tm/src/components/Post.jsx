import React from 'react';
import './Post.css';


function Post({ username, userPic, postImage, caption }) {
  return (
    <div className="post-card-container">
      <div className="post-header">
        <img src={userPic} alt="profile" className="placeholder-avatar" />
        <h4>{username}</h4>
      </div>
      
      <div className="post-image-placeholder">
        <img src={postImage} alt="post content" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      
      <div className="post-footer">
        <p><strong>{username}</strong> {caption}</p>
      </div>
    </div>
  );
}

export default Post;