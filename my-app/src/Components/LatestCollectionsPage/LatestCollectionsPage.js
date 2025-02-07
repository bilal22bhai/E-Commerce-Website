import React from "react";
import "./LatestCollections.css";
import all_product from "../Assets/all_product";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules and styles
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; // Core Swiper styles
import "swiper/css/effect-coverflow"; // Effect styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles

const LatestCollectionsPage = () => {
  // Filter products for the latest collections category
  const latestCollections = all_product.filter(
    (item) => item.category === "latestCollection"
  );

  return (
    <div className="new-collections">
      <div className="collections-header">
        <h1>Latest Collections</h1>
      </div>
      <hr />

      {/* Add Rotate Slider using Swiper */}
      <div className="collections-slider">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50, // Rotation angle
            stretch: 0,
            depth: 100, // Depth effect
            modifier: 1,
            slideShadows: true, // Enable slide shadows
          }}
          autoplay={{
            delay: 2000, // Delay between slides (in milliseconds)
            disableOnInteraction: false, // Autoplay will continue even after user interaction
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper-container"
        >
          {latestCollections.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <Link to={`/product/${item.id}`}>
                <img
                  onClick={() => window.scrollTo(0, 0)}
                  src={item.image}
                  alt={item.name}
                  className="slider-image"
                />
              </Link>
              <p className="slider-item-name">{item.name}</p>
              <div className="slider-item-prices">
                <span className="new-price">${item.new_price.toFixed(2)}</span>
                <span className="old-price">${item.old_price.toFixed(2)}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestCollectionsPage;
