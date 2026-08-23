import React, { useState } from 'react';

function Highlights() {
  // 1. STATE: The list of uploaded videos
  const [highlightsList, setHighlightsList] = useState([]);

  // 2. FUNCTION: Handle the video upload
  const handleAddVideo = (e) => {
    const file = e.target.files[0];
    if (!file) return; // If they cancel the upload, do nothing

    // Create a local URL so the browser can play the video immediately
    const videoUrl = URL.createObjectURL(file);
    
    const newVideo = {
      id: Date.now(),
      url: videoUrl,
      name: file.name // We save the file name just to show it!
    };

    // Add to our list
    setHighlightsList([...highlightsList, newVideo]);
    
    // Reset the input so they can upload the exact same file again if they delete it
    e.target.value = '';
  };

  // 3. FUNCTION: Delete a video
  const handleDeleteVideo = (idToRemove) => {
    setHighlightsList(highlightsList.filter(video => video.id !== idToRemove));
  };

  return (
    <div className="mt-4">
      
      {/* THE DISPLAY SECTION (Video Grid) */}
      <div className="row mb-4">
        {highlightsList.length === 0 ? (
          <p className="text-muted col-12">No highlights added yet.</p>
        ) : (
          highlightsList.map((video) => (
            <div key={video.id} className="col-md-6 mb-3">
              <div className="card border-0 shadow-sm overflow-hidden bg-light">
                {/* The Video Player */}
                <video 
                  src={video.url} 
                  controls 
                  className="w-100" 
                  style={{ maxHeight: '200px', backgroundColor: '#000' }}
                ></video>
                
                {/* Delete Button & File Name */}
                <div className="card-body p-2 d-flex justify-content-between align-items-center">
                  <span className="text-truncate small text-muted" style={{ maxWidth: '70%' }}>
                    {video.name}
                  </span>
                  <button 
                    className="btn btn-sm btn-outline-danger" 
                    onClick={() => handleDeleteVideo(video.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* THE UPLOAD INPUT */}
      <div className="card p-3 bg-light border-0">
        <h6 className="mb-3">Upload New Highlight</h6>
        <input 
          type="file" 
          accept="video/*" /* This tells the computer to only look for video files! */
          className="form-control" 
          onChange={handleAddVideo}
        />
      </div>

    </div>
  );
}

export default Highlights;