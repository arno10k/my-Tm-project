import React, { useState } from 'react';
import '../components/Messages.css'; 
import stats from '../assets/stat.png';
import highlights from '../assets/video.png';
import posts from '../assets/image.jpg';

function Profile({ user, onBack }) {
  // State for the Player tabs (Posts, Stats, Highlights, Trophies)
  const [activeTab, setActiveTab] = useState('posts');

  // Safety check
  if (!user) return null;

  return (
    <div className="container mt-2 mb-5" style={{ maxWidth: '950px' }}>
      
      {/* --- BACK BUTTON --- */}
      <div className="mb-4 ml-2">
        <button 
          className="btn btn-light rounded-pill px-4 font-weight-bold border shadow-sm"
          onClick={onBack}
        >
          ← Back
        </button>
      </div>

      {/* --- THE MAIN PROFILE BOX --- */}
      <div 
        className="card shadow-sm p-4 p-md-5" 
        style={{ borderRadius: '24px', border: '1px solid #ebebeb', backgroundColor: '#ffffff' }}
      >
        
        {/* 1. THE SHARED HEADER (Avatar, Name, Bio) */}
        <div className="d-flex flex-column align-items-center text-center mb-4">
          <img 
            src={user.avatar} 
            className="rounded-circle mb-3 shadow-sm" 
            alt={user.name} 
            style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid white' }} 
          />
          
          {/* NAME AND SMALL BADGE ON THE SAME LINE! */}
          <div className="d-flex align-items-center justify-content-center mb-2">
            <h3 className="font-weight-bold mb-0 mr-2">{user.name}</h3>
            <span 
              className={`role-badge ${user.role === 'Scout' ? 'badge-scout' : 'badge-player'}`}
              style={{ fontSize: '12px', padding: '4px 8px', transform: 'translateY(-2px)' }}
            >
              {user.role}
            </span>
          </div>

          <p className="text-muted mb-3">@{user.username}</p>
          
          <p className="px-md-5" style={{ fontSize: '15px', lineHeight: '1.6' }}>
            {user.bio || "This user hasn't added a bio yet, but they are ready to connect and make moves on the network!"}
          </p>
        </div>


       
        {user.role === 'Scout' ? (
          
          /* --- SCOUT LAYOUT (No Tabs, Just Posts) --- */
          <div className="scout-portfolio mt-4">
            <hr className="mb-4" />
            <h5 className="font-weight-bold mb-3 ml-1">Recent Signings & Activity</h5>
            
            <div className="row g-3">
              {/* Placeholder Post Grid */}
              <div className="col-4">
                <div className="bg-light rounded" style={{ height: '200px', border: '1px solid #eaeaea' }}></div>
              </div>
              <div className="col-4">
                <div className="bg-light rounded" style={{ height: '200px', border: '1px solid #eaeaea' }}></div>
              </div>
              <div className="col-4">
                <div className="bg-light rounded" style={{ height: '200px', border: '1px solid #eaeaea' }}></div>
              </div>
            </div>
          </div>

        ) : (

          /* --- PLAYER LAYOUT (4 Custom Image Tabs) --- */
          <div className="player-portfolio mt-2">
            
            {/* THE CUSTOM IMAGE NAVIGATION ROW */}
            <div className="d-flex justify-content-around border-bottom pb-3 mb-4">
              
              {/* Tab 1: Posts */}
              <div onClick={() => setActiveTab('posts')} style={{ cursor: 'pointer', opacity: activeTab === 'posts' ? 1 : 0.4 }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef', borderRadius: '8px' }} className="d-flex align-items-center justify-content-center mx-auto mb-1">
                  <img src={posts} alt="Posts" style={{ width: '24px', height: '24px' }} />
                </div>
              </div>

              {/* Tab 2: Stats */}
              <div onClick={() => setActiveTab('stats')} style={{ cursor: 'pointer', opacity: activeTab === 'stats' ? 1 : 0.4 }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef', borderRadius: '8px' }} className="d-flex align-items-center justify-content-center mx-auto mb-1">
                  <img src={stats} alt="Posts" style={{ width: '24px', height: '24px' }} />
                </div>
              </div>

              {/* Tab 3: Highlights */}
              <div onClick={() => setActiveTab('highlights')} style={{ cursor: 'pointer', opacity: activeTab === 'highlights' ? 1 : 0.4 }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef', borderRadius: '8px' }} className="d-flex align-items-center justify-content-center mx-auto mb-1">
                  <img src={highlights} alt="Posts" style={{ width: '24px', height: '24px' }} />
                </div>
              </div>

              {/* Tab 4: Trophies */}
              <div onClick={() => setActiveTab('trophies')} style={{ cursor: 'pointer', opacity: activeTab === 'trophies' ? 1 : 0.4 }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef', borderRadius: '8px' }} className="d-flex align-items-center justify-content-center mx-auto mb-1">
                  🏆 {/* Replace with your custom trophy icon */}
                </div>
              </div>

            </div>

            {/* TAB CONTENT RENDERER */}
            <div className="tab-content pt-2">
              
              {activeTab === 'posts' && (
                <div className="row g-3">
                  <div className="col-4"><div className="bg-light rounded" style={{ height: '150px' }}></div></div>
                  <div className="col-4"><div className="bg-light rounded" style={{ height: '150px' }}></div></div>
                  <div className="col-4"><div className="bg-light rounded" style={{ height: '150px' }}></div></div>
                </div>
              )}

              {activeTab === 'stats' && (
                <div className="p-4 bg-light rounded text-center">
                  <h5 className="font-weight-bold text-muted">Player Statistics Area</h5>
                  <p className="small mb-0">Dynamic radar charts and numbers will go here based on position.</p>
                </div>
              )}

              {activeTab === 'highlights' && (
                <div className="p-4 bg-dark rounded text-center text-white">
                  <h5 className="font-weight-bold mb-1">▶️ Highlight Reels</h5>
                  <p className="small text-light mb-0">Video thumbnails will load here.</p>
                </div>
              )}

              {activeTab === 'trophies' && (
                <div className="p-4 border rounded text-center">
                  <h5 className="font-weight-bold text-warning mb-1">Trophy Cabinet</h5>
                  <p className="small text-muted mb-0">List of tournaments won and MVP awards.</p>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Profile;