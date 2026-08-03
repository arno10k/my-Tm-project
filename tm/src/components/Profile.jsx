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
              {user.posts && user.posts.length > 0 ? (
                user.posts.map((post, index) => (
                  <div className="col-4" key={index}>
                    <img 
                      src={post.image} 
                      alt="Scout Activity" 
                      className="w-100 rounded shadow-sm mb-2" 
                      style={{ aspectRatio: '1 / 1', objectFit: 'cover' }} 
                    />
                    {/* 👇 THE NEW CAPTION TEXT 👇 */}
                    {post.caption && (
                      <p className="text-muted mb-0" style={{ fontSize: '11px', lineHeight: '1.2' }}>
                        {post.caption}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-muted w-100 text-center mt-3">No recent signings yet.</p>
              )}
            </div>

          </div>

        ) : (

          /* --- PLAYER LAYOUT (4 Custom Image Tabs) --- */
          <div className="player-portfolio mt-2">

           {/* THE RESTORED NAVIGATION BAR! */}
            <div className="d-flex justify-content-around border-bottom pb-3 mb-4">
              
              <div onClick={() => setActiveTab('posts')} style={{ cursor: 'pointer', opacity: activeTab === 'posts' ? 1 : 0.4 }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef', borderRadius: '8px' }} className="d-flex align-items-center justify-content-center mx-auto mb-1">
                   <img src={posts} alt="Posts" style={{ width: '24px', height: '24px' }} />
                </div>
                <small className="font-weight-bold">Posts</small>
              </div>

              <div onClick={() => setActiveTab('stats')} style={{ cursor: 'pointer', opacity: activeTab === 'stats' ? 1 : 0.4 }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef', borderRadius: '8px' }} className="d-flex align-items-center justify-content-center mx-auto mb-1">
                   <img src={stats} alt="Stats" style={{ width: '24px', height: '24px' }} />
                </div>
                <small className="font-weight-bold">Stats</small>
              </div>

              <div onClick={() => setActiveTab('highlights')} style={{ cursor: 'pointer', opacity: activeTab === 'highlights' ? 1 : 0.4 }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef', borderRadius: '8px' }} className="d-flex align-items-center justify-content-center mx-auto mb-1">
                   <img src={highlights} alt="Highlights" style={{ width: '24px', height: '24px' }} />
                </div>
                <small className="font-weight-bold">Film</small>
              </div>

              <div onClick={() => setActiveTab('trophies')} style={{ cursor: 'pointer', opacity: activeTab === 'trophies' ? 1 : 0.4 }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef', borderRadius: '8px' }} className="d-flex align-items-center justify-content-center mx-auto mb-1">
                  🏆
                </div>
                <small className="font-weight-bold">Awards</small>
              </div>

            </div>
            {/* END OF NAVIGATION BAR */}
            
            {/* TAB CONTENT RENDERER */}
            <div className="tab-content pt-2">
              
              {/* TAB 1: POSTS */}
              {activeTab === 'posts' && (
                <div className="row g-3">
                  {user.posts && user.posts.length > 0 ? (
                    user.posts.map((post, index) => (
                      <div className="col-4" key={index}>
                        <img 
                          src={post.image} 
                          alt="Post" 
                          className="w-100 rounded shadow-sm mb-2" 
                          style={{ aspectRatio: '1 / 1', objectFit: 'cover' }} 
                        />
                        {/* 👇 THE NEW CAPTION TEXT 👇 */}
                        {post.caption && (
                          <p className="text-muted mb-0" style={{ fontSize: '11px', lineHeight: '1.2' }}>
                            {post.caption}
                          </p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-muted w-100 text-center mt-3 pt-4">No posts uploaded yet.</p>
                  )}
                </div>
              )}

              {/* TAB 2: STATS */}
              {activeTab === 'stats' && (
                <div className="row g-3">
                  {user.stats && user.stats.length > 0 ? (
                    user.stats.map((stat, index) => (
                      <div className="col-6" key={index}>
                        <div className="p-3 bg-light rounded text-center shadow-sm">
                          <h4 className="font-weight-bold text-primary mb-0">{stat.value}</h4>
                          <small className="text-muted font-weight-bold">{stat.label}</small>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted w-100 text-center mt-3 pt-4">No stats recorded yet.</p>
                  )}
                </div>
              )}

              {/* TAB 3: HIGHLIGHTS */}
              {activeTab === 'highlights' && (
                <div className="row g-3">
                  {user.highlights && user.highlights.length > 0 ? (
                    user.highlights.map((vidSrc, index) => (
                      <div className="col-6" key={index}>
                        <div 
                          className="bg-dark rounded d-flex align-items-center justify-content-center shadow-sm" 
                          style={{ height: '150px', backgroundImage: `url(${vidSrc})`, backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer' }}
                        >
                          <span style={{ fontSize: '40px', opacity: '0.8' }}>▶️</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted w-100 text-center mt-3 pt-4">No film uploaded yet.</p>
                  )}
                </div>
              )}

              {/* TAB 4: TROPHIES */}
              {activeTab === 'trophies' && (
                <div className="row g-2">
                  {user.trophies && user.trophies.length > 0 ? (
                    user.trophies.map((trophy, index) => (
                      <div className="col-12" key={index}>
                        <div className="d-flex align-items-center p-3 border rounded shadow-sm bg-white">
                          <div className="mr-3" style={{ fontSize: '35px' }}>🏆</div>
                          <div>
                            <h6 className="font-weight-bold mb-0">{trophy.name}</h6>
                            <small className="text-muted">{trophy.details}</small>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted w-100 text-center mt-3 pt-4">No awards added to cabinet.</p>
                  )}
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