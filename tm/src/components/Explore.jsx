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
import D1 from '../assets/damien1.png';
import D2 from '../assets/damien2.png';
import L1 from '../assets/leo1.jpeg';
import L2 from '../assets/leo2.jpeg';
import MV from '../videos/Mvideo.mp4';
import LV from '../videos/Lvideo.mp4';
import SV from '../videos/Svideo.mp4';


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
        MV,
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
      ],
      career: [
        { team: "FC Manchester United", years: "2015 - Present Day", details: "Progressed through the academy to the first team." },
        { team: "FC Aston Villa(Loan)", years: "2024 - 2025", details: "Went on a loan spell to clear my mind." },
        { team: "FC Barcelona(Loan)", years: "2025-2026", details: "Went on a successful loan but sadly didn't fully fit their playstyle." }
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
          caption: "Nothing beats this moment. World Cup 2026 is ours! Proud to represent Spain and bring the trophy home." 
        },
        { 
          image: Y2, 
          caption: "A dream come true sharing the pitch with my idol, the GOAT, Lionel Messi." 
        }
      ],
      stats: [
        { label: "Goals", value: "56" },
        { label: "Assists", value: "56" },
        { label: "Top Speed", value: "35.5 km/h" },
        { label: "Matches", value: "184" }
      ],
      highlights: [
        LV,
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

      ],
      career: [
        { team: "FC Barcelona", years: "2023 - Present Day", details: "Made my way through the academy to the first team." }
      ]

    },
    {
      id: 4,
      name: "Damien Sterling",
      username: "d_sterling",
      role: "Scout",
      avatar: dam,
      bio: "Global Scout | Spotting the next generation of talent | Traveling the globe for the game we love",
      posts: [
        { 
          image: D1, 
          caption: "Welcome to the family! Thrilled to officially secure this rising star. Hard work starts now. Let's make history!" 
        },
        { 
          image: D2, 
          caption: "Experience meets ambition. Huge signing locked in for the squad. Ready for the new chapter!" 
        }
      ],
    },
    {
      id: 5,
      name: "Leo Silva",
      username: "baller_leo99",
      role: "Player",
      avatar: leo,
      bio: " Aiming to be the best verion of myself",
      posts: [
        { 
          image: L1, 
          caption: "Proud to win the FA cup with my lads, we worked hard for this one. #FAcup #Teamwork" 
        },
        { 
          image: L2, 
          caption: "We did it! After this hard season we finally won the U21 Premier League. #Champions #Teamwork" 
        }
      ],
      stats: [
        { label: "G/A", value: "121" },
        { label: "Academy Matches", value: "157" },
        { label: "Successful Passes rate", value: "89%" },
        { label: "Successful Dribbles rate", value: "78%" }
      ],
      highlights: [
        SV,
      ],
      trophies: [
        { name: "U17 FA Cup Winner", details: "Crystale Palace U17 - 2024" },
        { name: "U21 Premier League Winner", details: "West Ham U21 - 2026" }
      ],
      career: [
        { team: "FC Crystale Palace(Academy)", years: "2015 - 2025", details: "Got scouted and and got better with them but sadly had to part ways." },
        { team: "FC West Ham(Academy)", years: "2026 - Present Day", details: "Perfect fit for the team hope to make it tto the first team one day." }
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