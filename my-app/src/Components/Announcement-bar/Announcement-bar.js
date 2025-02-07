import React, { useEffect } from "react";
import Flickity from "flickity"; // Import Flickity
import "flickity/css/flickity.css"; // Import Flickity CSS
import "./Announcementbar.css"
const Announcementbar = () => {
  useEffect(() => {
    const slider = document.querySelector("#AnnouncementSlider");
    if (slider) {
      // Initialize Flickity
      new Flickity(slider, {
        cellAlign: "left",
        contain: true,
        autoPlay: 3000, // Auto-slide every 3 seconds
        pauseAutoPlayOnHover: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: true,
      });
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="announcement-bar">
      <div className="page-width">
        <div className="slideshow-wrapper">
          <button
            type="button"
            className="visually-hidden slideshow__pause"
            data-id="sections--18197895479527__announcement"
            aria-live="polite"
          >
            <span className="slideshow__pause-stop">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="icon icon-pause"
                viewBox="0 0 10 13"
              >
                <path
                  d="M0 0h3v13H0zm7 0h3v13H7z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="icon__fallback-text">Pause slideshow</span>
            </span>
            <span className="slideshow__pause-play">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="icon icon-play"
                viewBox="18.24 17.35 24.52 28.3"
              >
                <path
                  fill="#323232"
                  d="M22.1 19.151v25.5l20.4-13.489-20.4-12.011z"
                ></path>
              </svg>
              <span className="icon__fallback-text">Play slideshow</span>
            </span>
          </button>

          <div
            id="AnnouncementSlider"
            className="announcement-slider flickity-enabled is-draggable"
            data-compact="true"
            data-block-count="2"
            tabIndex="0"
          >
            <div className="flickity-viewport">
              <div className="flickity-slider">
                <div
                  id="AnnouncementSlide-announcement-0"
                  className="announcement-slider__slide"
                  data-index="0"
                >
                  <a
                    className="announcement-link"
                    href="https://opiabylogo.com/discount/ADD5"
                  >
                    <span className="announcement-text">
                      Additional 5% off on prepaid orders
                    </span>
                    <span className="announcement-link-text">
                      Apply Now
                    </span>
                  </a>
                </div>
                <div
                  id="AnnouncementSlide-announcement-1"
                  className="announcement-slider__slide"
                  data-index="1"
                >
                  <span className="announcement-text">
                    Free shipping Nationwide
                  </span>
                  <span className="announcement-link-text">
                    (above orders PKR 3000)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcementbar;
