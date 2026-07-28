import React from 'react';
import '../components/Messages.css'; // For the badges!

function Profile({ user, onBack }) {
  // If no user was clicked for some reason, don't crash!
  if (!user) return null;

  return (
    <div className="container my-5 text-center" style={{ maxWidth: '600px' }}>
      
      {/* BACK BUTTON */}
      <div className="d-flex justify-content-start mb-4">
        <button 
          className="btn btn-outline-dark rounded-pill px-4 font-weight-bold"
          onClick={onBack}
        >
          ← Back
        </button>
      </div>

      {/* THE BLANK SCREEN TEST BOX */}
      <div 
        className="card shadow-sm p-5 d-flex flex-column align-items-center justify-content-center" 
        style={{ 
          borderRadius: '24px', 
          minHeight: '400px', 
          border: '2px dashed #ccc',
          backgroundColor: '#fafafa' 
        }}
      >
        {/* THIS IS THE BIG NUMBER YOU ASKED FOR! */}
        <h1 className="display-1 font-weight-bold text-primary mb-3" style={{ fontSize: '100px' }}>
          #{user.id}
        </h1>

        <h3 className="font-weight-bold mb-1">{user.name}</h3>
        
        <span className={`role-badge mb-3 ${user.role === 'Scout' ? 'badge-scout' : 'badge-player'}`}>
          {user.role}
        </span>

        {user.username && <p className="text-muted">@{user.username}</p>}

        <div className="alert alert-info mt-4 rounded-pill px-4" role="alert">
          🛠️ <strong>Profile Canvas Ready:</strong> Tomorrow we add stats, photos, and custom info here!
        </div>

      </div>

    </div>
  );
}

export default Profile;