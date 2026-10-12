import React, { useState } from 'react';
import Bio from './Bio';
import Gallery from './Gallery';
import Stats from './Stats';
import Highlights from './Highlights';
import Awards from './Awards';
import Career from './Career';

function MyProfile() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
  <div className="my-profile-page">
    <div className="container my-4" style={{ maxWidth: '850px' }}>
      

      <Bio />


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


      <div className="tab-content">
        {activeTab === 'posts' && <Gallery />}
        {activeTab === 'stats' && <Stats />}
        {activeTab === 'highlights' && <Highlights />}
        {activeTab === 'awards' && <Awards />}
        {activeTab === 'career' && <Career />}
      </div>

    </div>
  </div>
  );
}

export default MyProfile;