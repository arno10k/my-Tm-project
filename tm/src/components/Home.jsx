import React, { useState } from 'react'
import cr7Pic from '../assets/cr7.jpg';
import messiPic from '../assets/messi.png';
import neymarPic from '../assets/neymar.png';
import messi from '../assets/messim.jpg';
import neymar from '../assets/neymarm.jpg';
import cr7 from '../assets/cr7m.jpg';
import WCM from '../assets/wcm.jpg';
import WC from '../assets/wc.webp';
import Post from './Post'; 
import StoryModal from './StoryModal';
import Profile from './Profile'; 
import BarcaPFP from '../assets/barcapfp.jpg';
import Barca from '../assets/barca.jpg';
import onefootball from '../assets/onefootball.jpg';
import onefootballPFP from '../assets/onefootball_logo.jpg';
import M from '../assets/mentality.catalyst.jpeg';
import A from '../assets/againstallodds.jpeg';
import R from '../assets/relentless.drive.jpeg';
import r from '../assets/rdpfp.png';
import a from '../assets/aaopfp.png';
import m from '../assets/mcpfp.png';
import g from '../assets/gracias10.jpg';
import f from '../assets/farewell.jpeg';
import i from '../assets/idk.jpeg';
import StoriesRow from './StoriesRow';


function Home() {
 const [activeStoryImage, setActiveStoryImage] = useState(null);
 const [selectedUser, setSelectedUser] = useState(null); 


  const messiUser = {
    name: "Lionel Messi",
    username: "lionel_messi",
    role: "Goat",
    avatar: messiPic,
    bio: "Bienvenidos a la cuenta oficial de Instagram de Leo Messi / Welcome to the official Leo Messi Instagram account",
    posts: [
      { image: messi, caption: "I once walked away, but I came back stronger to win it all. Never let a temporary setback steal your lifetime dream." }
    ],
    stats: [
      { label: "Goals", value: "934" },
      { label: "Assists", value: "426" },
      { label: "Matches", value: "1179" }
    ],
    trophies: [
      { name: "Champions League", details: "Barcelona - 4x Winner" },
      { name: "La Liga", details: "Barcelona - 10x Winner" },
      { name: "Copa del Rey", details: "Barcelona - 7x Winner" },
      { name: "Club World Cup", details: "Barcelona - 3x Winner" },
      { name: "European Super Cup", details: "Barcelona - 3x Winner" },
      { name: "Supercopa de España", details: "Barcelona - 8x Winner" },
      { name: "Ligue 1", details: "PSG - 2x Winner" },
      { name: "Trophée des Champions", details: "PSG - 2023" },
      { name: "Leagues Cup", details: "Inter Miami - 2023" },
      { name: "Supporters Shield", details: "Inter Miami - 2024" },
      { name: "MLS", details: "Inter Miami - 2025" },
      { name: "Campeones Cup", details: "Inter Miami - 2026" },
      { name: "Copa América", details: "Argentina - 2x Winner" },
      { name: "U-20 WC", details: "Argentina - 2005" },
      { name: "Beijing Olympic Games Gold Medal", details: "Argentina - 2008" },
      { name: "WC", details: "Argentina - 2022" },
      { name: "Finalissima", details: "Argentina - 2022" }
    ],
    career: [
      { team: "FC Barcelona", years: "2004 - 2021", details: "Legendary era." },
      { team: "Paris Saint-Germain", years: "2021 - 2023", details: "Ligue 1 titles." },
      { team: "Inter Miami", years: "2023 - Present", details: "MLS journey." }
    ]
  };

  const neymarUser = {
    name: "Neymar Jr",
    username: "neymarjr",
    role: "Player",
    avatar: neymarPic,
    bio: "The last jogabonito.",
    posts: [
      { image: neymar, caption: "I don't play for the crowd, I play for the love of the game. Let your passion drive you to greatness." }
    ],
    stats: [
      { label: "Goals", value: "400+" },
      { label: "Assists", value: "250+" }
    ],
    career: [
      { team: "FC Santos", years: "2009 - 2013", details: "Appearing to the world" },
      { team: "FC Barcelona", years: "2013 - 2017", details: "MSN" },
      { team: "Paris Saint-Germain", years: "2017 - 2023", details: "Individual brilliance heavily disrupted by injuries" },
      { team: "FC Al-Hilal", years: "2023 - 2025", details: "Injury" },
      { team: "FC Santos", years: "2025 - Present", details: "The End?" },
    ]
  };

  const ronaldoUser = {
    name: "Cristiano Ronaldo",
    username: "cristiano",
    role: "Player",
    avatar: cr7Pic,
    bio: "FAHHHHHHHHHHHHHHHH",
    posts: [
      { image: cr7, caption: "Succes isn't built in the moments no one is watching. Train until your limit becomes your warm-up" }
    ],
    stats: [
      { label: "Goals", value: "980" },
      { label: "Assists", value: "261" },
      { label: "Matches", value: "339" }
    ],
      career: [
      { team: "FC Sporting", years: "2002 - 2003", details: "From brooming streets to pro player" },
      { team: "FC Manchester United", years: "2003 - 2009", details: "Beast" },
      { team: "Real Madrid", years: "2009 - 2018", details: "Prime" },
      { team: "FC Juventus", years: "2018 - 2021", details: "Change" },
      { team: "FC Manchester United", years: "2021 - 2022", details: "Back home ended badly" },
      { team: "FC Al-Nassr", years: "2023 - Present", details: "The End?" }
    ]
  };

  const beyondUser = {
    name: "Beyondthe90_",
    username: "beyondthe90",
    role: "Scout",
    avatar: WC,
    bio: "Every drop of sweat, every early morning, and sacrifice, was for this final chapter.",
    posts: [
      { image: WCM, caption: "Every drop of sweat, every early morning, and sacrifice, was for this final chapter. Prove to the world that your grind was worth the glory." }
    ]
  };
  
  const storiesList = [
    { 
      username: "mentality_c", 
      userPic: m, 
      onClick: () => setActiveStoryImage({
        image: M,
        userPic: m,
        username: "MentalityCatalyst",
        subtitle: "mentality_c",
        caption: "Talent gets you noticed, but discipline keeps you on the pitch."
      }) 
    },
    { 
      username: "onefootball", 
      userPic: onefootballPFP, 
      onClick: () => setActiveStoryImage({
        image: onefootball,
        userPic: onefootballPFP,
        username: "Onefootball",
        subtitle: "onefootball",
        caption: "From the plastic bathtub 19 years ago to the biggest stage on Earth. he was once in Messi's hands, now, they hold the fate of the WC final."
      }) 
    },
    { 
      username: "a_a_odds", 
      userPic: a, 
      onClick: () => setActiveStoryImage({
        image: A,
        userPic: a,
        username: "againstallodds",
        subtitle: "a_a_odds",
        caption: "As long as there is a fraction of a chance, we fight until the final whistle."
      }) 
    },
    { 
      username: "fcbarcelona", 
      userPic: BarcaPFP, 
      onClick: () => setActiveStoryImage({
        image: Barca,
        userPic: BarcaPFP,
        username: "FC Barcelona",
        subtitle: "fcbarcelona",
        caption: "Ready for the big night!"
      }) 
    },
    { 
      username: "relentlessd", 
      userPic: r, 
      onClick: () => setActiveStoryImage({
        image: R,
        userPic: r,
        username: "relentless.drive",
        subtitle: "relentlessd",
        caption: "Don't wait for the perfect opportunity. Chase it down. Create it."
      }) 
    },
    { 
      username: "m10_fan", 
      userPic: g, 
      onClick: () => setActiveStoryImage({
        image: f,
        userPic: g,
        username: "Messi Fan",
        subtitle: "m10_fan",
        caption: "Thanks for the memories, Leo. Your legacy will forever be etched in our hearts."
      }) 
    },
    { 
      username: "a_a_odds", 
      userPic: a, 
      onClick: () => setActiveStoryImage({
        image: i,
        userPic: a,
        username: "againstallodds",
        subtitle: "a_a_odds",
        caption: "Fight until the final whistle."
      }) 
    }
  ];

  return (
    <div>
      
      {selectedUser ? (
        <Profile 
          user={selectedUser} 
          onBack={() => setSelectedUser(null)} 
        />
      ) : (
        <div className="home-feed">
          
          <div style={{
            maxWidth: '650px',
            margin: '0 auto 30px auto',
            padding: '15px',
            backgroundColor: 'white',
            border: '1px solid #dbdbdb',
            borderRadius: '8px'
          }}>
            <StoriesRow stories={storiesList} />
          </div>
      
          <Post 
            username="Lionel Messi" 
            userPic={messiPic} 
            postImage={messi} 
            caption="I once walked away, but I came back stronger to win it all. Never let a temporary setback steal your lifetime dream." 
            onProfileClick={() => setSelectedUser(messiUser)}
          />

          <Post 
            username="Neymar Jr" 
            userPic={neymarPic} 
            postImage={neymar} 
            caption="I don't play for the crowd, I play for the love of the game. Let your passion drive you to greatness." 
            onProfileClick={() => setSelectedUser(neymarUser)}
          />
          <Post 
            username="Cristiano Ronaldo" 
            userPic={cr7Pic} 
            postImage={cr7} 
            caption="Succes isn't built in the moments no one is watching. Train until your limit becomes your warm-up" 
            onProfileClick={() => setSelectedUser(ronaldoUser)}
          />
           <Post 
            username="Beyondthe90_" 
            userPic={WC} 
            postImage={WCM} 
            caption="Every drop of sweat, every early morning, and sacrifice, was for this final chapter. Prove to the world that your grind was worth the glory." 
            onProfileClick={() => setSelectedUser(beyondUser)}
          />
           
           {activeStoryImage && (
            <StoryModal 
              story={activeStoryImage} 
              onClose={() => setActiveStoryImage(null)}        
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;