import React, { useState } from 'react'
import cr7Pic from '../assets/cr7.jpg';
import messiPic from '../assets/messi.png';
import neymarPic from '../assets/neymar.png';
import messi from '../assets/messiM.jpg';
import neymar from '../assets/neymarM.jpg';
import cr7 from '../assets/cr7M.jpg';
import WCM from '../assets/WCM.jpg';
import WC from '../assets/WC.webp';
import Story from './Story';
import Post from './Post'; 
import StoryModal from './StoryModal';
import BarcaPFP from '../assets/barcapfp.jpg';
import Barca from '../assets/barca.jpg';
import onefootball from '../assets/onefootball.jpg';
import onefootballPFP from '../assets/onefootball_logo.jpg';
import M from '../assets/mentality.catalyst.jpeg';
import A from '../assets/againstallodds.jpeg';
import R from '../assets/relentless.drive.jpeg';
import r from '../assets/RDpfp.png';
import a from '../assets/AAOpfp.png';
import m from '../assets/MCpfp.png';


function Home() {
 const [activeStoryImage, setActiveStoryImage] = useState(null);

  return (
    <div className="home-feed">
      
      <div className="stories-bar" style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '650px',
        margin: '0 auto 30px auto',
        padding: '15px',
        backgroundColor: 'white',
        border: '1px solid #dbdbdb',
        borderRadius: '8px',
        overflowX: 'auto'
      }}>
         <Story 
          username="mentality_c" 
          userPic={m} 
          onClick={() => setActiveStoryImage({
            image: M,
            userPic: m,
            username: "mentality.catalyst",
            caption: "Talent gets you noticed, but discipline keeps you on the pitch."
          })} 
        />
        <Story 
          username="Onefootball" 
          userPic={onefootballPFP} 
          onClick={() => setActiveStoryImage({
            image: onefootball,
            userPic: onefootballPFP,
            username: "Onefootball",
            caption: "From the plastic bathtub 19 years ago to the biggest stage on Earth. he was once in Messi's hands, now, they hold the fate of the WC final."
          })} 
        />
        <Story 
          username="a_a_odds" 
          userPic={a} 
          onClick={() => setActiveStoryImage({
            image: A,
            userPic: a,
            username: "againstallodds",
            caption: "As long as there is a fraction of a chance, we fight until the final whistle."
          })} 
        />
        
        <Story 
          username="fcbarcelona" 
          userPic={BarcaPFP} 
          onClick={() => setActiveStoryImage({
            image: Barca,
            userPic: BarcaPFP,
            username: "fcbarcelona",
            caption: "Ready for the big night!"
          })} 
        />
        
        <Story 
          username="relentlessd" 
          userPic={r} 
          onClick={() => setActiveStoryImage({
            image: R,
            userPic: r,
            username: "relentless.drive",
            caption: "Don't wait for the perfect opportunity. Chase it down. Create it."
          })} 
        />
      
      </div>
  
      <Post 
        username="Lionel Messi" 
        userPic={messiPic} 
        postImage={messi} 
        caption="I once walked away, but I came back stronger to win it all. Never let a temporary setback steal your lifetime dream." 
      />

      <Post 
        username="Neymar Jr" 
        userPic={neymarPic} 
        postImage={neymar} 
        caption="I don't play for the crowd, I play for the love of the game. Let your passion drive you to greatness." 
      />
      <Post 
        username="Cristiano Ronaldo" 
        userPic={cr7Pic} 
        postImage={cr7} 
        caption="Succes isn't built in the moments no one is watching. Train until your limit becomes your warm-up" 
      />
       <Post 
        username="Beyondthe90_" 
        userPic={WC} 
        postImage={WCM} 
        caption="Every drop of sweat, every early morning, and sacrifice, was for this final chapter. Prove to the world that your grind was worth the glory." 
        
      />
       
       {activeStoryImage && (
        <StoryModal 
          story={activeStoryImage} 
          onClose={() => setActiveStoryImage(null)}        
        />
      )}
    </div>
  );
}

export default Home;