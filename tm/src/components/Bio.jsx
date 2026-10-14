import React, { useState } from 'react';
import profileIcon from '../assets/profileicon.svg';

const Bio = ({ userDetails, setUserDetails, profilePhoto, setProfilePhoto }) => {
  // Controls whether the edit form popup is open or closed
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);

  const updateUserDetails = (event) => {
    event.preventDefault();

    // Sends the updated info up to the master state in MyProfile.jsx
    setUserDetails({
      name: event.target.nameOfUser.value,
      bio: event.target.aboutUser.value,
      role: userDetails.role // Preserves existing role
    });

    setEditFormIsOpen(false);
  };

  const updateProfilePhoto = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    // Sends the updated photo up to the master state in MyProfile.jsx
    setProfilePhoto(imageUrl);

    event.target.value = '';
  };

  return (
    <div className="bio-container mb-4">
      <div className="d-flex align-items-center mb-3">
        
        {/* Profile Picture with quick upload trigger */}
        <div style={{ position: 'relative', marginRight: '30px' }}>
          <img 
            src={profilePhoto} 
            alt="Profile Avatar" 
            className="rounded-circle shadow-sm" 
            style={{ width: '90px', height: '90px', objectFit: 'cover' }} 
          />
          <input 
            type="file" 
            accept="image/*" 
            onChange={updateProfilePhoto} 
            style={{ display: 'none' }} 
            id="profilePhotoInput" 
          />
          <label 
            htmlFor="profilePhotoInput" 
            className="btn btn-sm btn-light position-absolute bottom-0 end-0 rounded-circle border shadow-sm"
            style={{ cursor: 'pointer', padding: '2px 6px', fontSize: '10px' }}
            title="Change Photo"
          >
            📷
          </label>
        </div>

        {/* User Info & Edit Toggle */}
        <div>
          <h4 className="font-weight-bold mb-1">{userDetails.name}</h4>
          <p className="text-muted mb-2">{userDetails.bio}</p>
          <button 
            className="btn btn-outline-primary btn-sm rounded-pill px-4 font-weight-bold"
            onClick={() => setEditFormIsOpen(!editFormIsOpen)}
          >
            {editFormIsOpen ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>

      {/* Edit Form Popup */}
      {editFormIsOpen && (
        <form className="edit-bio-form card p-3 shadow-sm mt-3 border-0 bg-light" onSubmit={updateUserDetails}>
          <div className="form-group mb-2">
            <label className="font-weight-bold small text-muted">Name</label>
            <input 
              type="text" 
              name="nameOfUser" 
              className="form-control form-control-sm" 
              defaultValue={userDetails.name} 
              required 
            />
          </div>
          <div className="form-group mb-3">
            <label className="font-weight-bold small text-muted">Bio</label>
            <input 
              type="text" 
              name="aboutUser" 
              className="form-control form-control-sm" 
              defaultValue={userDetails.bio} 
            />
          </div>
          <button type="submit" className="btn btn-dark btn-sm font-weight-bold w-100">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default Bio;