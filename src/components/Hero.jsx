import React, { useState } from 'react'
import Button from './Button';

const Hero = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Move down by 100vh (height of the viewport)
      behavior: "smooth" // Smooth scrolling effect
    });
  };
  return (
    <div className='heroContainer'>
      <div className="heroContent">
        <p className='motoContainer'>"YOUR FITNESS, YOUR WAY."</p>
        <h1>Get<span>Fit</span></h1>
      </div>
        <p className='infoContainer'>GetFit is your all-in-one fitness companion designed to keep you motivated, track your progress, and help you reach your health goals. Whether you're a beginner or a seasoned athlete, GetFit provides<span> personalized workouts, nutrition insights </span>, and <span>real-time progress tracking</span> to fit your lifestyle. Start your journey today and <span>unlock a jacked Psychique</span>, happier you!</p>

        <Button text='Get Started' handleScrollDown={handleScrollDown}>
        Get Started
        <i className="fa-solid fa-arrow-down"></i>
        </Button>
        {/* <button onClick={handleScrollDown}>
            
        </button> */}
    </div>
  )
}

export default Hero
