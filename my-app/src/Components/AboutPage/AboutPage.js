import React, { useEffect } from 'react';
import './AboutPage.css';

const AboutPage = () => {

  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('visible');
        }, index * 300); // Stagger the animation for each element
      });
    };
    
    animateElements();
  }, []);

  return (
    <div className="about-page">
      {/* Header Section */}
      <header className="about-header fade-in">
        <h1>Markhoor E-Commerce</h1>
        <h2>Your trusted online shopping platform for quality and variety</h2>
      </header>

      {/* About Us Section */}
      <section className="about-content fade-in">
        <h2>For Us</h2>
        <p>
          Markhoor was founded with the mission to revolutionize the online shopping experience. Our goal is to make shopping simple, secure, and enjoyable for everyone. We believe in offering a wide variety of high-quality products that meet the needs of our diverse customer base.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section fade-in">
        <h2>Our Mission</h2>
        <p>
          Our mission is to connect people with exceptional products through innovative technology and unparalleled service. We strive to make shopping easy and enjoyable, while ensuring that each customer has a seamless experience from browsing to checkout.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="about-footer fade-in">
        <h2>Always be Happy</h2>
      </footer>
    </div>
  );
}

export default AboutPage;
