import React from 'react';

function Highlights({ highlightsList = [], setHighlightsList = () => {} }) {
  const handleAddVideo = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const videoUrl = URL.createObjectURL(file);
    const newVideo = {
      id: Date.now(),
      url: videoUrl,
      name: file.name
    };

    setHighlightsList([...highlightsList, newVideo]);
    e.target.value = '';
  };

  const handleDeleteVideo = (idToRemove) => {
    setHighlightsList(highlightsList.filter(video => video.id !== idToRemove));
  };

  return (
    <div className="mt-4">
      <div className="card shadow-sm p-4 mb-4 border-0 bg-light">
        <h5 className="font-weight-bold mb-3">Upload New Highlight</h5>
        <div className="form-group mb-0">
          <input 
            type="file" 
            accept="video/*" 
            onChange={handleAddVideo} 
            className="form-control-file" 
          />
        </div>
      </div>

      <div className="row mb-4">
        {highlightsList.length === 0 ? (
          <p className="text-muted text-center py-3 col-12">No highlights added yet.</p>
        ) : (
          highlightsList.map((video) => (
            <div key={video.id} className="col-md-6 mb-3">
              <div className="card shadow-sm border-0 overflow-hidden bg-light">
                <video 
                  src={video.url} 
                  controls 
                  className="w-100" 
                  style={{ maxHeight: '200px', backgroundColor: '#000' }} 
                />
                <div className="card-body p-3 d-flex justify-content-between align-items-center">
                  <span className="small text-truncate" style={{ maxWidth: '70%' }}>{video.name}</span>
                  <button 
                    onClick={() => handleDeleteVideo(video.id)} 
                    className="btn btn-sm btn-outline-danger font-weight-bold"
                  >
                    Delete
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

export default Highlights;