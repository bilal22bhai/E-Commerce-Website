import React from 'react'
import './Offers.css'
import { useNavigate } from "react-router-dom";
import exclucive_image from '../Assets/exclusive_image.png'
import arrow_icon from "../Assets/arrow.png";
const Offers = () => {
  const navigate = useNavigate(); // React Router's hook for navigation

  const handleNavigate = () => {
    navigate("/Excutiveofferies"); // Navigate to the LatestCollectionsPage
  };
  return (
    <div className='offers'>
      <div className="offers-left">
<h1>
    Exclusive
</h1>
<h1>Offers for You</h1>
<p> Only on Best Sellers Product</p>
<button className="exclusive-latest-btn" onClick={handleNavigate}>
  <span>Check now</span>
  <img src={arrow_icon} alt="Arrow Icon" />
</button>


      </div>
      <div className="offers-right">
<img src={exclucive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
