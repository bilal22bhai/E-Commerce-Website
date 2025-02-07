import React from 'react';
import './OfficesPage.css';

const OfficesPage = () => {
  const offices = [
    {
      city: 'Lahore',
      address: '474 R1, Johar town',
      phone: '04235456729',
    },
    {
      city: 'Karachi',
      address: '45 Clifton Block 5, Karachi',
      phone: '+92-21-98765432',
    },
    {
      city: 'Islamabad',
      address: 'Blue Area, Islamabad',
      phone: '+92-51-87654321',
    },
    {
      city: 'Haroonabad',
      address: 'Haroonabad,quid-e-azam road',
      phone: '+3090422122',
    },
  ];

  return (
    <div className="offices-page-container">
      <h1 className="offices-title">Our Offices in Pakistan</h1>
      <div className="offices-grid">
        {offices.map((office, index) => (
          <div className="office-card" key={index}>
            <h2 className="office-city">{office.city}</h2>
            <p className="office-address">{office.address}</p>
            <p className="office-phone">
              <strong>Phone:</strong>{' '}
              <a href={`tel:${office.phone}`} className="office-phone-link">
                {office.phone}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficesPage;
