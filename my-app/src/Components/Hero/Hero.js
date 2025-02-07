import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_video from "../Assets/hero_video.mp4"; // Correct import for video file

const Hero = () => {
  const navigate = useNavigate(); // React Router's hook for navigation

  const handleNavigate = () => {
    navigate("/latest-collections"); // Navigate to the LatestCollectionsPage
  };

  return (
    <>
    <div className="hero">
      {/* Left Section */}
      <div className="hero-left">
        <h1>New Arrivals Only</h1>
        <div className="hero-content">
          <div className="new-collection-icon">
            <i className="fas fa-cubes"></i>
          </div>
          <h1>Collections for Everyone</h1>
        </div>

        <button className="hero-latest-btn" onClick={handleNavigate}>
          <span>
            <h2>Latest Collections</h2>
          </span>
          <img src={arrow_icon} alt="Arrow Icon" />
        </button>
      </div>

   
        </div>
           {/* Right Section with Video Animation */}
      <div className="hero-right">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src={hero_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
        </div>
        </>
  );
};

export default Hero;
