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
function Home() {
  const [IsStoryOpen, setIsStoryOpen] = useState(false);


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
        {/* When you click a story, we flip the switch to TRUE */}
        <Story onClick={() => setIsStoryOpen(true)} />
        <Story onClick={() => setIsStoryOpen(true)} />
        <Story onClick={() => setIsStoryOpen(true)} />
        <Story onClick={() => setIsStoryOpen(true)} />
        <Story onClick={() => setIsStoryOpen(true)} />

      </div>
      
   

      <Post 
        username="Cristiano Ronaldo" 
        userPic={cr7Pic} 
        postImage={cr7} 
        caption="Succes isn't built in the moments no one is watching. Train until your limit becomes your warm-up" 
      />

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
        username="Beyondthe90_" 
        userPic={WC} 
        postImage={WCM} 
        caption="Every drop of sweat, every early morning, and sacrifice, was for this final chapter. Prove to the world that your grind was worth the glory." 
      />
      {IsStoryOpen && <StoryModal onClose={() => setIsStoryOpen(false)} />}
    </div>
  );
}

export default Home;