import React, { useState } from 'react';
import AccountCard from './AccountCard';
import defaultAvatar from '../assets/CL.png';
import Profile from './Profile';
import juju from '../assets/julian.png';
import marc from '../assets/marcus.png';
import kai from '../assets/kai.jpeg';
import mateo from '../assets/matteo.jpeg';

function Notifications() {
 
  const [activeTab, setActiveTab] = useState('follow'); 
  const [selectedUser, setSelectedUser] = useState(null);

  const [requests] = useState([
    {
      id: 1,
      name: "Kai Lowsen",
      username: "kai_nxtup",
      role: "Player",
      requestType: "follow", 
      avatar: kai
    },
    {
      id: 2,
      name: "Julian Hayes",
      username: "juju_hay",
      role: "Scout",
      requestType: "connect", 
      avatar: juju
    },
    {
      id: 3,
      name: "Mateo Cruz",
      username: "teocruz_ftbl",
      role: "Player",
      requestType: "connect",
      avatar: mateo
    },
    {
      id: 4,
      name: "Marcus Thompson",
      username: "marc_thom",
      role: "Scout",
      requestType: "follow",
      avatar: marc
    }
  ]);
  const followCount = requests.filter(req => req.requestType === 'follow').length;
  const connectCount = requests.filter(req => req.requestType === 'connect').length;

  // 3. FILTERING LOGIC: Shows requests based on the selected tab
    const filteredRequests = requests.filter(req => req.requestType === activeTab);

  // Handler for when you click a card to see the full profile (Phase 4!)
  const handleProfileClick = (user) => {
    console.log("Clicked to view profile of:", user.name);
    setSelectedUser(user); // <-- This triggers the switch!
  };

  return (
    <div>
      {/* If a request card is clicked, show their Profile! */}
      {selectedUser ? (
        <Profile 
          user={selectedUser} 
          onBack={() => setSelectedUser(null)} 
        />
      ) : (
      <div className="container my-4" style={{ maxWidth: '850px' }}>
        
        {/* PAGE HEADER (Left-aligned with optical adjustment!) */}
        <div className="mb-4" style={{ marginLeft: '20px' }}>
          <h1 className="h3 mb-1 font-weight-bold">Requests</h1>
        </div>

        {/* --- THE MAIN CONTENT BOX --- */}
        <div 
          className="card shadow-sm p-4 p-md-5" 
          style={{ 
            borderRadius: '24px', 
            border: '1px solid #ebebeb',
            backgroundColor: '#ffffff' 
          }}
        >
          
          {/* REQUEST TYPE TOGGLE TABS */}
          <div className="d-flex justify-content-center mb-4 pb-3 border-bottom">
            
            <button 
              className={`btn mr-2 px-4 rounded-pill font-weight-bold ${activeTab === 'follow' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('follow')}
            >
              Follows ({followCount})
            </button>

            <button 
              className={`btn px-4 rounded-pill font-weight-bold ${activeTab === 'connect' ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => setActiveTab('connect')}
            >
              Connections ({connectCount})
            </button>

          </div>

          {/* THE REQUESTS LIST (Rendering our AccountCard with pageType="notifications"!) */}
          <div className="notifications-list mt-2">
            {filteredRequests.length > 0 ? (
              filteredRequests.map(user => (
                <AccountCard 
                  key={user.id} 
                  user={user} 
                  pageType="notifications" 
                  onProfileClick={handleProfileClick} 
                />
              ))
            ) : (
              <div className="text-center py-5">
                <p className="text-muted h6">No pending requests in this category.</p>
              </div>
            )}
          </div>

        </div>
        {/* --- END OF CONTENT BOX --- */}

      </div>
    )}
    </div>
  );
}

export default Notifications;
    
  