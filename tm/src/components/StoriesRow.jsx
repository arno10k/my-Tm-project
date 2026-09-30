import React, { useRef } from 'react';
import Story from './Story';
import './StoriesRow.css';

function StoriesRow({ stories = [] }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="stories-row-wrapper">
      {/* Left Arrow Button */}
      <button className="story-arrow-btn left-arrow" onClick={scrollLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Scrollable Container holding your Story components */}
      <div className="stories-scroll-container" ref={scrollRef}>
        {stories.map((story, index) => (
          <Story
            key={index}
            username={story.username}
            userPic={story.userPic}
            onClick={story.onClick}
          />
        ))}
      </div>

      {/* Right Arrow Button */}
      <button className="story-arrow-btn right-arrow" onClick={scrollRight}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default StoriesRow;