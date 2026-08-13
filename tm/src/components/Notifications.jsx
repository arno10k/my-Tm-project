import React, { useState } from 'react';
import AccountCard from './AccountCard';
import defaultAvatar from '../assets/CL.png';
import Profile from './Profile';
import juju from '../assets/julian.png';
import marc from '../assets/marcus.png';
import kai from '../assets/kai.jpeg';
import mateo from '../assets/matteo.jpeg';
import mike from '../assets/mike.jpeg';
import rash from '../assets/rash.jpeg';
import gav from '../assets/gavin.png';
import wayne from '../assets/wayne.jpeg';
import bill from '../assets/Bill.jpeg';
import K1 from '../assets/kai1.jpeg';
import K2 from '../assets/kai2.jpeg';
import M1 from '../assets/marcus1.png';
import M2 from '../assets/marcus2.png';
import M3 from '../assets/marcus3.png';
import J1 from '../assets/julian1.png';
import J2 from '../assets/julian2.png';
import C1 from '../assets/matteo1.jpg';
import C2 from '../assets/matteo2.jpeg';
import KV from '../videos/Kvideo.mp4';
import john from '../assets/john.jpeg';
import R1 from '../assets/cole.jpeg';
import T1 from '../assets/tom.jpeg';
import B1 from '../assets/fer.jpeg';
import B2 from '../assets/fer1.jpeg';
import G1 from '../assets/gav1.png';
import G2 from '../assets/gav2.png';




function Notifications() {
 
  const [activeTab, setActiveTab] = useState('network'); 
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
        KV,
      ],
      trophies: [
        { name: "U21 Euro Winner", details: "England U21 - 2023" }
      ],
      career: [
        { team: "FC Leeds United(Academy)", years: "2011 - 2022", details: "Started playing football with them." },
        { team: "FC Ipwisch Town(Academy)", years: "2022 - 2024", details: "Got a little more recognition and got scouted with Ipwisch Town." },
        { team: "FC Liverpool(Academy)", years: "2024 - Present Day", details: "After a very good U21 Euro many big clubs got interested end ended up choosing Liverpool." }
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
      bio: "Football is life",
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
      trophies: [
        { name: "Copa del Rey Juvenil", details: "Mallorca U19 - 2024" }
      ],
      career: [
        { team: "FC LA Galaxy(Academy)", years: "2010 - 2021", details: "Grew up playing with LA Galaxy." },
        { team: "FC Mallorca(Academy)", years: "2021 - Present Day", details: "Was forced to move to Europe, luckily was able to join Mallorca, and ended up for the best." }
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
    },
    {
      id: 5,
      name: "Mike Johnson",
      username: "mike_johnson23",
      role: "Player",
      requestType: "network",
      avatar: mike,
      bio: " Hope to make it one day",
      posts: [
        { 
          image: john, 
          caption: "Words are nothing without actions." 
        }
      ],
      stats: [
        { label: "G/A", value: "2" },
        { label: "Academy Matches", value: "5" },
        { label: "Top Speed", value: "29,3 km/h" },
        { label: "Dribbles Success Rate", value: "64%" }
      ],
      career: [
        { team: "FC Southhampton(Academy)", years: "2026 - Present Day", details: "Recently signed my first contract with the academy." }
      ]
    },
    {
      id: 6,
      name: "Gavin Mercer",
      username: "scouting_gav",
      role: "Scout",
      requestType: "network",
      avatar: gav,
      bio: "Apex Elite Academy scout | finding young talents",
      posts: [
        { 
          image: G1, 
          caption: "Thrilled to officially welcome our newest recruit to the Apex Elite Academy family. The future is incredibly bright." 
        },
        { 
          image: G2, 
          caption: "Another massive day for the academy. Proud to get this deal over the line and can't wait to see him in action." 
        }
      ],
    },
    {
      id: 7,
      name: "Marcus Cole",
      username: "teocruz_ftbl",
      role: "Player",
      requestType: "network",
      avatar: rash,
      bio: "Hope to make my name remembered one day",
      posts: [
        { 
          image: R1, 
          caption: "Talent brings u so far, but hard work and dedication is what makes u remembered." 
        }
      ],
      stats: [
        { label: "G/A", value: "57" },
        { label: "Academy Matches", value: "124" },
        { label: "Top Speed", value: "25.9 km/h" },
        { label: "Pass Accuracy", value: "92%" }
      ],
      career: [
        { team: "FC Luton Town(Academy)", years: "2023 - Present Day", details: "Been playing with U18, but have been given more and more chances with U21's." }
      ]
    },
    {
      id: 8,
      name: "Thomas Wayne",
      username: "teocruz_ftbl",
      role: "Player",
      requestType: "network",
      avatar: wayne,
      bio: "Young player hoping to make it one day",
      posts: [
        { 
          image: T1, 
          caption: "The only answer is hard work." 
        },
        { 
          image: C1, 
          caption: "Proud to win 2024 Copa del Rey Juvenil leading the back line." 
        }
      ],
      stats: [
        { label: "G/A", value: "42" },
        { label: "Academy Matches", value: "185" },
        { label: "Tackle Success Rate", value: "78%" },
        { label: "Interception Success Rate", value: "84%" }
      ],
      trophies: [
        { name: "Copa del Rey Juvenil", details: "Mallorca U19 - 2024" }
      ],
      career: [
        { team: "FC Mallorca(Academy)", years: "2019 - Present Day", details: "Had my chance and took it." }
      ]
    },
    {
      id: 9,
      name: "Bill Fermingham",
      username: "teocruz_ftbl",
      role: "Player",
      requestType: "network",
      avatar: bill,
      bio: "It's about the love of the game, not the fame.",
      posts: [
        { 
          image: B1, 
          caption: "Working hard is good, but don't forget to enjoy the game." 
        },
        { 
          image: B2, 
          caption: "Happy to have met my GOAT." 
        }
      ],
      stats: [
        { label: "G/A", value: "243" },
        { label: "Academy Matches", value: "344" },
        { label: "Top Speed", value: "29 km/h" },
        { label: "Dribbles Success Rate", value: "84%" }
      ],
      career: [
        { team: "FC Inter Miami(Academy)", years: "2019 - Present Day", details: "Been advancing through the ranks." }
      ]
    },
  ]);
  const networkCount = requests.filter(req => req.requestType === 'network').length;
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
              className={`btn mr-2 px-4 rounded-pill font-weight-bold ${activeTab === 'network' ? 'btn-dark' : 'btn-outline-dark'}`}
              onClick={() => setActiveTab('network')}
            >
              My Network ({networkCount})
            </button>

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
                  activeTab={activeTab}
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
    
  