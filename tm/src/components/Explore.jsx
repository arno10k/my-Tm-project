import React, { useState } from 'react';
import AccountCard from './AccountCard';
import defaultAvatar from '../assets/CL.png'; 
import Profile from './Profile';
import cart from '../assets/carter.png';
import dam from '../assets/damien.png';
import rashy from '../assets/Rashford.jpeg';
import yamal from '../assets/lamine.jpeg';
import leo from '../assets/leo.jpeg';
import R from '../assets/rashbarca.jpeg';
import MR from '../assets/Marcus Rashford.jpeg';
import C1 from '../assets/carter1.png';
import C2 from '../assets/carter2.png';
import Y1 from '../assets/lamine1.jpeg';
import Y2 from '../assets/lamine2.jpeg';


function Explore() {
  // 1. FILTER STATES: Keeps track of search words and button toggles
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRole, setActiveRole] = useState('all'); // 'all', 'Player', or 'Scout'
  const [selectedUser, setSelectedUser] = useState(null);

  // 2. DUMMY DATA: Our Master List of accounts to discover
  const [exploreUsers] = useState([
    {
      id: 1,
      name: "Marcus Rashford",
      username: "MR",
      role: "Player",
      avatar: rashy,
      bio: "Man U winger",
      posts: [
        { 
          image: R, 
          caption: "Tx barca for everything, hope I'll play with you again one day. #ViscaBarça" 
        },
        { 
          image: MR, 
          caption: "Sadly out of the WC but great performances from the team. We'll come back stronger! #EnglandFC" 
        }
      ],
      stats: [
        { label: "Goals", value: "138" },
        { label: "Assists", value: "64" },
        { label: "Top Speed", value: "35.95 km/h" },
        { label: "Matches", value: "426" }
      ],
      highlights: [
        rashy,
      ],
      trophies: [
        { name: "FA Cup Winner", details: "Manchester United - 2016" },
        { name: "Community Shield", details: "Manchester United - 2016" },
        { name: "Europa League", details: "Manchester United - 2017" },
        { name: "Carabao Cup", details: "Manchester United - 2017" },
        { name: "Carabao Cup", details: "Manchester United - 2023" },
        { name: "FA Cup Winner", details: "Manchester United - 2024" },
        { name: "Laliga Winner", details: "Barcelona - 2026" },
        { name: "Supercopa de España", details: "Barcelona - 2026" },
      ]

    },
    {
      id: 2,
      name: "Carter Ross",
      username: "carter_ross",
      role: "Scout",
      avatar: cart,
      bio: "Global Football Scout | Identifying the next generation of top-tier talent. Passionate about bridging the gap between raw potential and the professional pitch. Always looking for that extra 1%.",
      posts: [
        { 
          image: C1, 
          caption: "Pen to paper! Absolutely thrilled to get this deal over the line for G-S FC. Been tracking this lad's progress for months, and his work rate off the ball is unmatched. The hard work starts now, but the future is looking incredibly bright. Welcome to the club! #GSFC #NextGen #ScoutingNetwork" 
        },
        { 
          image: C2, 
          caption: "Phoenix United FC just got a whole lot stronger. Incredibly proud to announce this signing today. Top talent, top mentality. Let’s go! #PhoenixUnitedFC #Scouting #FutureStar" 
        }
      ],
    },
    {
      id: 3,
      name: "Lamine Yamal",
      username: "lamine_304",
      role: "Player",
      avatar: yamal,
      bio: "viscaBarca",
      posts: [
        { 
          image: Y1, 
          caption: "Nothing beats this moment." 
        },
        { 
          image: Y2, 
          caption: "A dream come true sharing the pitch with my idol, the GOAT, Lionel Mess." 
        }
      ],
      stats: [
        { label: "Goals", value: "56" },
        { label: "Assists", value: "56" },
        { label: "Top Speed", value: "35.5 km/h" },
        { label: "Matches", value: "184" }
      ],
      highlights: [
        rashy,
      ],
      trophies: [
        { name: "Laliga Winner", details: "Barcelona - 2023" },
        { name: "Euro", details: "Spain - 2024" },
        { name: "Laliga Winner", details: "Barcelona - 2025" },
        { name: "Copa del Rey", details: "Barcelona - 2025" },
        { name: "Supercopa de España", details: "Barcelona - 2025" },
        { name: "Laliga Winner", details: "Barcelona - 2026" },
        { name: "Supercopa de España", details: "Barcelona - 2026" },
        { name: "World Cup", details: "Spain - 2026" },

      ]

    },
    {
      id: 4,
      name: "Damien Sterling",
      username: "d_sterling",
      role: "Scout",
      avatar: dam,
      posts: [
        { 
          image: dam, 
          caption: "Incredible atmosphere at the stadium today! 🏟️🔥" 
        },
        { 
          image: leo, 
          caption: "Putting in the extra hours. #Grind ⚽💪" 
        }
      ],
    },
    {
      id: 5,
      name: "Leo Silva",
      username: "baller_leo99",
      role: "Player",
      avatar: leo,
      posts: [
        { 
          image: dam, 
          caption: "Incredible atmosphere at the stadium today! 🏟️🔥" 
        },
        { 
          image: leo, 
          caption: "Putting in the extra hours. #Grind ⚽💪" 
        }
      ],
      stats: [
        { label: "Goals", value: "89" },
        { label: "Assists", value: "37" },
        { label: "Top Speed", value: "33.4 km/h" },
        { label: "Matches", value: "248" }
      ],
      highlights: [
        rashy,
      ],
      trophies: [
        { name: "FA Cup Winner", details: "Manchester United - 2024" },
        { name: "Carabao Cup", details: "Manchester United - 2023" }
      ]

    }
  ]);

  // 3. FILTERING LOGIC: Only show users that match the search AND the active role button
  const filteredUsers = exploreUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.username.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = activeRole === 'all' || user.role === activeRole;

    return matchesSearch && matchesRole;
  });

  // Handler for when you click a card to see the full profile (Phase 4 later!)
  const handleProfileClick = (user) => {
    console.log("Clicked to view profile of:", user.name);
    setSelectedUser(user); // <-- NEW: Sets the clicked person!
  };

  return (
    <div>
      {/* If selectedUser is NOT null, show the Profile page! */}
      {selectedUser ? (
        <Profile 
          user={selectedUser} 
          onBack={() => setSelectedUser(null)} 
        />
      ) : (
      <div className="container my-4" style={{ maxWidth: '850px' }}>
        
        {/* PAGE HEADER (Left-aligned exactly like Messages!) */}
        <div className="mb-4" style={{ marginLeft: '20px' }}> {/*what i play with for the explorer placement*/}
          <h1 className="h3 mb-1 font-weight-bold">Explore</h1>
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
          
          {/* SEARCH BAR */}
          <div className="mb-4">
            <div className="input-group" style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
              <input 
                type="text" 
                className="form-control border-0 py-3 px-4 bg-transparent" 
                placeholder="Search by name or username..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ fontSize: '16px', boxShadow: 'none' }}
              />
            </div>
          </div>

          {/* ROLE TOGGLE BUTTONS (Player vs Scout) */}
          <div className="d-flex justify-content-center mb-4 pb-2 border-bottom">
            <button 
              className={`btn mr-2 px-4 mb-3 rounded-pill font-weight-bold ${activeRole === 'all' ? 'btn-dark' : 'btn-outline-dark'}`}
              onClick={() => setActiveRole('all')}
            >
              All
            </button>
            <button 
              className={`btn mr-2 px-4 mb-3 rounded-pill font-weight-bold ${activeRole === 'Player' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveRole('Player')}
            >
              Players
            </button>
            <button 
              className={`btn px-4 mb-3 rounded-pill font-weight-bold ${activeRole === 'Scout' ? 'btn-purple' : 'btn-outline-secondary'}`}
              style={activeRole === 'Scout' ? { backgroundColor: '#21cb6b ', color: 'white', borderColor: '#21cb6b ' } : {}}
              onClick={() => setActiveRole('Scout')}
            >
              Scouts
            </button>
          </div>

          {/* THE ACCOUNT LIST (Inside the box!) */}
          <div className="explore-list mt-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <AccountCard 
                  key={user.id} 
                  user={user} 
                  pageType="explore" 
                  onProfileClick={handleProfileClick} 
                />
              ))
            ) : (
              <div className="text-center py-5">
                <p className="text-muted h6">No accounts found matching your search.</p>
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

export default Explore;