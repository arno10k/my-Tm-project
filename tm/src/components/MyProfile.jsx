import React, { useState } from 'react';
import Bio from './Bio';
import Gallery from './Gallery';
import Stats from './Stats';
import Highlights from './Highlights';
import Awards from './Awards';
import Career from './Career';
import Profile from './Profile'; 
import profileIcon from '../assets/profileicon.svg';

function MyProfile() {
  const [activeTab, setActiveTab] = useState('posts');
  const [isPreviewMode, setIsPreviewMode] = useState(false); // Controls Preview Mode

  // Master State for your profile data
  const [userDetails, setUserDetails] = useState({
    name: 'Name Surname',
    bio: 'Bio',
    role: 'Player'
  });
  const [profilePhoto, setProfilePhoto] = useState(profileIcon);
  const [postsList, setPostsList] = useState([]);
  const [statsList, setStatsList] = useState([]);
  const [highlightsList, setHighlightsList] = useState([]);
  const [awardsList, setAwardsList] = useState([]);
  const [careerList, setCareerList] = useState([]);

  // Package your live data into the object format that Profile.jsx expects
  const liveUserData = {
    name: userDetails.name,
    username: userDetails.name.toLowerCase().replace(/\s+/g, '_'),
    role: userDetails.role || 'Player',
    avatar: profilePhoto,
    bio: userDetails.bio,
    posts: postsList,
    stats: statsList,
    highlights: highlightsList.map(h => h.url),
    trophies: awardsList,
    career: careerList
  };

  return (
    <div className="my-profile-page">
      <div className="container my-4" style={{ maxWidth: '850px', position: 'relative' }}>
        
        {/* PREVIEW PUBLIC VIEW BUTTON */}
        <div className="d-flex justify-content-end mb-3">
          <button 
            className="btn btn-outline-dark btn-sm rounded-pill px-3 font-weight-bold shadow-sm"
            onClick={() => setIsPreviewMode(!isPreviewMode)}
          >
            {isPreviewMode ? "Back to Edit Profile" : "👁️ Preview Public View"}
          </button>
        </div>

        {/* CONDITIONAL RENDER: Show Public Profile View vs Edit Mode */}
        {isPreviewMode ? (
          <Profile 
            user={liveUserData} 
            onBack={() => setIsPreviewMode(false)} 
          />
        ) : (
          <>
            <Bio 
              userDetails={userDetails} 
              setUserDetails={setUserDetails}
              profilePhoto={profilePhoto}
              setProfilePhoto={setProfilePhoto}
            />

            {/* TAB NAVIGATION BAR */}
            <div className="d-flex justify-content-around border-bottom pb-3 mt-4 mb-4">
              <div onClick={() => setActiveTab('posts')} style={{ cursor: 'pointer', opacity: activeTab === 'posts' ? 1 : 0.5 }}>
                <h6 className="font-weight-bold mb-0">Posts</h6>
              </div>
              <div onClick={() => setActiveTab('stats')} style={{ cursor: 'pointer', opacity: activeTab === 'stats' ? 1 : 0.5 }}>
                <h6 className="font-weight-bold mb-0">Stats</h6>
              </div>
              <div onClick={() => setActiveTab('highlights')} style={{ cursor: 'pointer', opacity: activeTab === 'highlights' ? 1 : 0.5 }}>
                <h6 className="font-weight-bold mb-0">Highlights</h6>
              </div>
              <div onClick={() => setActiveTab('awards')} style={{ cursor: 'pointer', opacity: activeTab === 'awards' ? 1 : 0.5 }}>
                <h6 className="font-weight-bold mb-0">Awards</h6>
              </div>
              <div onClick={() => setActiveTab('career')} style={{ cursor: 'pointer', opacity: activeTab === 'career' ? 1 : 0.5 }}>
                <h6 className="font-weight-bold mb-0">Career</h6>
              </div>
            </div>

            {/* TAB CONTENT CHANGER (Passing shared states down) */}
            <div className="tab-content">
              {activeTab === 'posts' && <Gallery postsList={postsList} setPostsList={setPostsList} />}
              {activeTab === 'stats' && <Stats statsList={statsList} setStatsList={setStatsList} />}
              {activeTab === 'highlights' && <Highlights highlightsList={highlightsList} setHighlightsList={setHighlightsList} />}
              {activeTab === 'awards' && <Awards awardsList={awardsList} setAwardsList={setAwardsList} />}
              {activeTab === 'career' && <Career careerList={careerList} setCareerList={setCareerList} />}
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default MyProfile; // (keep your normal export default MyProfile)