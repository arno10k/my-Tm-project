import React, { useState } from 'react';

function Gallery({ postsList = [], setPostsList = () => {} }) {
  const [postImage, setPostImage] = useState(null);
  const [postCaption, setPostCaption] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImage(URL.createObjectURL(file));
    }
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!postImage) return;

    const newPost = {
      id: Date.now(),
      image: postImage,
      caption: postCaption
    };

    setPostsList([newPost, ...postsList]);
    setPostImage(null);
    setPostCaption('');
    document.getElementById('postImageInput').value = '';
  };

  const handleDeletePost = (idToRemove) => {
    setPostsList(postsList.filter(post => post.id !== idToRemove));
  };

  return (
    <div className="mt-4">
      <div className="card shadow-sm p-4 mb-4 border-0 bg-light">
        <h5 className="font-weight-bold mb-3">Create New Post</h5>
        <form onSubmit={handleAddPost}>
          <div className="form-group mb-3">
            <input 
              type="file" 
              id="postImageInput"
              accept="image/*" 
              onChange={handleImageChange} 
              className="form-control-file" 
              required
            />
          </div>
          <div className="form-group mb-3">
            <textarea 
              className="form-control" 
              placeholder="Write a caption..." 
              value={postCaption} 
              onChange={(e) => setPostCaption(e.target.value)}
              rows="2"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-sm px-4 font-weight-bold">Post</button>
        </form>
      </div>

      {postsList.length === 0 ? (
        <p className="text-muted text-center py-4">No posts yet. Share your first moment!</p>
      ) : (
        <div className="row">
          {postsList.map(post => (
            <div key={post.id} className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 overflow-hidden">
                <img src={post.image} alt="post" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div className="card-body p-3">
                  <p className="card-text mb-2">{post.caption}</p>
                  <button 
                    onClick={() => handleDeletePost(post.id)} 
                    className="btn btn-outline-danger btn-sm font-weight-bold"
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;