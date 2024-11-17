import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
// import "./styles.css";

// Sample clientNamesList for scrolling

const HorizontalScrollAnimation = ({ clientNamesList }) => {
  const [isUserControlled, setIsUserControlled] = useState(false);
  const controls = useAnimation();
  const scrollContainerRef = useRef(null);
  const [scrollDuration, setScrollDuration] = useState(0);

  // Calculate the content width and determine the duration dynamically
  useEffect(() => {
    if (scrollContainerRef.current) {
      const contentWidth = scrollContainerRef.current.scrollWidth;
      // Set the scroll duration based on content width (adjust factor for desired speed)
      setScrollDuration(contentWidth / 100); // Example factor, adjust for desired speed
    }
  }, []);

  // Function to start the auto-scrolling loop with dynamic duration
  const startAutoScroll = () => {
    controls.start({
      x: '-100%',
      transition: {
        duration: scrollDuration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    });
  };

  // Handle user drag interaction
  const handleDrag = (event, info) => {
    setIsUserControlled(true);
    controls.stop();
    controls.set({ x: info.offset.x });
  };

  const handleDragEnd = () => {
    setIsUserControlled(false);
    startAutoScroll();
  };

  // Start auto-scrolling when the component is mounted and when user interaction stops
  useEffect(() => {
    if (!isUserControlled && scrollDuration > 0) {
      startAutoScroll();
    }
  }, [isUserControlled, scrollDuration]);

  return (
    <div className='scroll-container' ref={scrollContainerRef}>
      <motion.div
        className='scroll-content'
        animate={controls}
        drag='x' // Allow user to drag horizontally
        dragConstraints={{ left: 0, right: 0 }} // Prevent vertical drag
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        {/* Render content */}
        {clientNamesList.map((item, index) => (
          <div className='item' key={index}>
            {item}
          </div>
        ))}
      </motion.div>

      {/* Duplicate content for seamless infinite scrolling */}
      <motion.div
        className='scroll-content'
        animate={controls}
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        {clientNamesList.map((item, index) => (
          <div className='item' key={index}>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalScrollAnimation;
