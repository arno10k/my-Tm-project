import React, { useState } from 'react';

function Gallery() {
  // 1. STATE: The list of saved posts
  const [postsList, setPostsList] = useState([]);
  
  // 2. STATE: The inputs for a new post
  const [postImage, setPostImage] = useState(null);
  const [postCaption, setPostCaption] = useState('');

  // 3. FUNCTION: Handle selecting an image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a local URL for the image preview
      setPostImage(URL.createObjectURL(file));
    }
  };

  // 4. FUNCTION: Add the new post
  const handleAddPost = (e) => {
    e.preventDefault();
    
    // We need at least an image to make a post!
    if (!postImage) return; 

    const newPost = {
      id: Date.now(),
      image: postImage,
      caption: postCaption
    };

    setPostsList([newPost, ...postsList]); // Puts the newest post at the top!
    
    // Clear the inputs
    setPostImage(null);
    setPostCaption('');
    document.getElementById('postImageInput').value = ''; // Clears the file chooser
  };

  // 5. FUNCTION: Delete a post
  const handleDeletePost = (idToRemove) => {
    setPostsList(postsList.filter(post => post.id !== idToRemove));
  };

  return (
    <div className="mt-4">
      
      {/* THE INPUT FORM (Create a Post) */}
      <form onSubmit={handleAddPost} className="card p-3 bg-light border-0 mb-4 shadow-sm">
        <h6 className="mb-3 font-weight-bold">Create New Post</h6>
        
        <div className="mb-3">
          <input 
            type="file" 
            id="postImageInput"
            accept="image/*" 
            className="form-control mb-2" 
            onChange={handleImageChange}
          />
          {/* Show a tiny preview if they selected an image */}
          {postImage && (
            <img src={postImage} alt="Preview" style={{ height: '80px', borderRadius: '8px' }} />
          )}
        </div>

        <div className="d-flex gap-2">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Write a caption..." 
            value={postCaption}
            onChange={(e) => setPostCaption(e.target.value)}
          />
          <button type="submit" className="btn btn-primary px-4 font-weight-bold">Post</button>
        </div>
      </form>

      {/* THE DISPLAY SECTION (Your Feed) */}
      <div className="row">
        {postsList.length === 0 ? (
          <p className="text-muted col-12">No posts yet. Share your first moment!</p>
        ) : (
          postsList.map((post) => (
            <div key={post.id} className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm overflow-hidden h-100">
                <img 
                  src={post.image} 
                  alt="Post" 
                  className="card-img-top" 
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-between p-3">
                  <p className="card-text mb-3">{post.caption}</p>
                  <button 
                    className="btn btn-sm btn-outline-danger align-self-start" 
                    onClick={() => handleDeletePost(post.id)}
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default Gallery;