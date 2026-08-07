import React, { useState } from 'react';
import AccountCard from './AccountCard';
import defaultAvatar from '../assets/CL.png';
import Profile from './Profile';
import juju from '../assets/julian.png';
import marc from '../assets/marcus.png';
import kai from '../assets/kai.jpeg';
import mateo from '../assets/matteo.jpeg';
import K1 from '../assets/kai1.jpeg';
import K2 from '../assets/kai2.jpeg';
import M1 from '../assets/marcus1.png';
import M2 from '../assets/marcus2.png';
import M3 from '../assets/marcus3.png';
import J1 from '../assets/julian1.png';
import J2 from '../assets/julian2.png';
import C1 from '../assets/matteo1.jpg';
import C2 from '../assets/matteo2.jpeg';


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
      avatar: kai,
      bio: " Hopeing on getting a chance to prove my worth one day",
      posts: [
        { 
          image: K1, 
          caption: "After a long and hard Euro, proud to finally bring it home with the U21s!" 
        },
        { 
          image: K2, 
          caption: "Putting in the extra hours. #Grind" 
        }
      ],
      stats: [
        { label: "G/A", value: "23" },
        { label: "Academy Matches", value: "147" },
        { label: "Successful Tackles rate", value: "89%" },
        { label: "Successful Pass rate", value: "65%" }
      ],
      highlights: [
        kai,
      ],
      trophies: [
        { name: "U21 Euro Winner", details: "England U21 - 2023" }
      ]
      
    },
    {
      id: 2,
      name: "Julian Hayes",
      username: "juju_hay",
      role: "Scout",
      requestType: "connect", 
      bio: "Helping you accomplish your dreams and get scolarships to play football at the next level.",
      avatar: juju,
      posts: [
        { 
          image: J1, 
          caption: "Securing the future one talent at a time! A massive welcome to our newest signee, ready to make his mark on the university pitch." 
        },
        { 
          image: J2, 
          caption: "We don't just find players; we build futures! Proud to announce another successful signing, bringing top talent to the next level. The journey begins now." 
        }
      ],
    },
    {
      id: 3,
      name: "Mateo Cruz",
      username: "teocruz_ftbl",
      role: "Player",
      requestType: "connect",
      avatar: mateo,
      posts: [
        { 
          image: C1, 
          caption: "Proud to win 2024 Copa del Rey Juvenil with my friends." 
        },
        { 
          image: C2, 
          caption: "The only way to succed is through hard work and dedication. #NoDaysOff" 
        }
      ],
      stats: [
        { label: "G/A", value: "257" },
        { label: "Academy Matches", value: "304" },
        { label: "Top Speed", value: "27,8 km/h" },
        { label: "Dribbles Success Rate", value: "84%" }
      ],
      highlights: [
        mateo,
      ],
      trophies: [
        { name: "Copa del Rey Juvenil", details: "Mallorca U19 - 2024" }
      ]
    },
    {
      id: 4,
      name: "Marcus Thompson",
      username: "marc_thom",
      role: "Scout",
      requestType: "follow",
      avatar: marc,
      bio: "Helping young talents find scolarships and professional opportunities in football.",
      posts: [
        { 
          image: M1, 
          caption: "A massive day for the future of West University athletics! Super proud to help this incredible young talent secure his scholarship and take it to the next level. The hard work is just getting started. Welcome to the WSU family!" 
        },
        { 
          image: M2, 
          caption: "Another huge signature in the books! It’s always an honor guiding dedicated athletes to the next stage of their academic and athletic journey. West University just got a whole lot stronger today. Let’s go!" 
        },
        { 
          image: M3, 
          caption: "Pen to paper for the newest addition to the squad! Seeing players achieve their goals and earn their spots at the collegiate level makes all the scouting trips worth it. The future is incredibly bright here at West U!" 
        }
      ],
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
    
  