import React, { useEffect, useState, useMemo } from "react";
import "./Notifications.css"; // Import the CSS file for animations and styles

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const fakeOrders = useMemo(
    () => [
      "Ahmed from Lahore just ordered a traditional kurta on Markahoor Shop!",
  "Sara from Islamabad purchased a summer dress on Markahoor Shop!",
  "Usman from Karachi bought a casual hoodie on Markahoor Shop!",
  "Zara from Rawalpindi ordered a formal suit on Markahoor Shop!",
  "Bilal from Multan just bought a cotton shirt on Markahoor Shop!",
  "Ayesha from Lahore purchased a silk scarf on Markahoor Shop!",
  "Ali from Karachi just bought a pair of jeans on Markahoor Shop!",
  "Fatima from Faisalabad ordered a cozy shawl on Markahoor Shop!",
  "Raza from Peshawar purchased a leather jacket on Markahoor Shop!",
  "Noor from Quetta just ordered a floral dress on Markahoor Shop!",
  "Bilal from Sialkot bought a t-shirt on Markahoor Shop!",
  "Hina from Multan ordered a stylish pair of shoes on Markahoor Shop!",
  "Imran from Lahore just bought a formal suit on Markahoor Shop!",
  "Sana from Islamabad purchased a trendy scarf on Markahoor Shop!",
  "Adeel from Karachi ordered a warm hoodie on Markahoor Shop!",
  "Maya from Lahore just purchased a handbag on Markahoor Shop!",
  "Rashid from Karachi bought a wristwatch on Markahoor Shop!",
  "Sobia from Islamabad ordered a woolen blazer on Markahoor Shop!",
  "Farhan from Faisalabad just bought sneakers on Markahoor Shop!",
  "Nida from Rawalpindi purchased a chic clutch on Markahoor Shop!",
  "Wasiq from Sialkot just bought a leather jacket on Markahoor Shop!",
  "Nashit from Karachi ordered a stylish woolen sweater on Markahoor Shop!",
  "Shazia from Lahore just bought a pair of boots on Markahoor Shop!",
  "Hassan from Multan purchased a laptop sleeve on Markahoor Shop!",
  "Meera from Karachi ordered a set of evening dresses on Markahoor Shop!",
  "Tariq from Islamabad just bought a pair of formal shoes on Markahoor Shop!",
  "Sana from Lahore purchased a beautiful shawl on Markahoor Shop!",
  "Ali from Karachi just bought a new wallet on Markahoor Shop!",
  "Fariha from Multan ordered a cozy fleece jacket on Markahoor Shop!",
  "Kamran from Lahore just purchased a designer tie on Markahoor Shop!",
  "Shahida from Peshawar ordered a handmade necklace on Markahoor Shop!",
  "Raheel from Islamabad just bought a pair of sunglasses on Markahoor Shop!",
  "Mona from Rawalpindi purchased a cotton blouse on Markahoor Shop!",
  "Sikandar from Karachi bought a smart wristwatch on Markahoor Shop!",
  "Fariha from Lahore just bought a chic handbag on Markahoor Shop!",
  "Aslam from Sialkot purchased a stylish trench coat on Markahoor Shop!",
  "Uzma from Multan ordered a trendy scarf on Markahoor Shop!",
  "Raza from Islamabad just bought a pair of winter gloves on Markahoor Shop!",
  "Muneeb from Lahore purchased a stylish woolen hat on Markahoor Shop!",
  "Hassan from Karachi just bought a set of cufflinks on Markahoor Shop!",
  "Sadiq from Peshawar ordered a leather belt on Markahoor Shop!",
  "Amina from Rawalpindi purchased a floral blouse on Markahoor Shop!",
  "Rehan from Faisalabad just bought a tailored suit on Markahoor Shop!",
  "Junaid from Islamabad ordered a cool denim jacket on Markahoor Shop!",
  "Maryam from Lahore just bought a pair of ballet flats on Markahoor Shop!",
  "Kiran from Karachi purchased a cozy knitted sweater on Markahoor Shop!",
  "Yasir from Rawalpindi just bought a pair of sneakers on Markahoor Shop!",
  "Zain from Sialkot purchased a formal shirt on Markahoor Shop!",
  "Nazia from Faisalabad just ordered a leather handbag on Markahoor Shop!",
  "Aliya from Lahore purchased a flowy dress on Markahoor Shop!",
  "Tariq from Karachi just bought a cozy fleece hoodie on Markahoor Shop!",
  "Laila from Islamabad ordered a set of pajamas on Markahoor Shop!",
  "Nashit from Multan purchased a pair of boots on Markahoor Shop!",
  "Samina from Rawalpindi just bought a designer clutch on Markahoor Shop!",
  "Shahid from Lahore purchased a denim vest on Markahoor Shop!",
  "Mehreen from Karachi just bought a casual blazer on Markahoor Shop!",
  "Kashan from Faisalabad purchased a formal tie on Markahoor Shop!",
  "Amna from Peshawar ordered a cotton dress on Markahoor Shop!",
  "Khalid from Islamabad just bought a leather jacket on Markahoor Shop!",
  "Mariam from Karachi purchased a pair of designer shoes on Markahoor Shop!",
  "Kamran from Lahore just ordered a sports watch on Markahoor Shop!",
  "Shamsa from Rawalpindi purchased a woolen scarf on Markahoor Shop!",
  "Raza from Karachi just bought a lightweight jacket on Markahoor Shop!",
  "Faisal from Multan purchased a set of cufflinks on Markahoor Shop!",
  "Hira from Lahore just bought a pair of stylish boots on Markahoor Shop!",
  "Zain from Faisalabad purchased a pair of formal shoes on Markahoor Shop!",
  "Rashid from Sialkot just bought a woolen hat on Markahoor Shop!",
  "Saima from Islamabad ordered a chic handbag on Markahoor Shop!",
  "Asim from Rawalpindi purchased a formal tie on Markahoor Shop!",
  "Zeeshan from Karachi just bought a summer shirt on Markahoor Shop!",
  "Nida from Faisalabad purchased a cozy hoodie on Markahoor Shop!",
  "Sara from Multan just bought a pair of stylish sunglasses on Markahoor Shop!",
  "Adeel from Lahore purchased a leather wallet on Markahoor Shop!",
  "Liaqat from Peshawar ordered a leather belt on Markahoor Shop!",
  "Kashaf from Islamabad just bought a formal dress on Markahoor Shop!",
  "Hamza from Rawalpindi purchased a casual jacket on Markahoor Shop!",
  "Farida from Lahore just bought a woolen shawl on Markahoor Shop!",
  "Imran from Karachi ordered a set of cufflinks on Markahoor Shop!",
  "Sadaf from Multan purchased a cozy cardigan on Markahoor Shop!",
  "Suleman from Islamabad bought a tailored suit on Markahoor Shop!",
  "Nazia from Lahore just ordered a denim skirt on Markahoor Shop!",
  "Tariq from Karachi bought a pair of sneakers on Markahoor Shop!",
  "Laila from Rawalpindi purchased a leather handbag on Markahoor Shop!",
  "Sana from Faisalabad just bought a chic blouse on Markahoor Shop!",
  "Wasiq from Multan purchased a stylish bracelet on Markahoor Shop!",
  "Rashida from Peshawar just bought a trendy t-shirt on Markahoor Shop!",
  "Fariha from Lahore purchased a pair of casual shoes on Markahoor Shop!",
  "Ahsan from Karachi ordered a stylish cap on Markahoor Shop!",
  "Zeba from Rawalpindi just bought a formal blouse on Markahoor Shop!",
  "Shamsa from Lahore purchased a cozy cardigan on Markahoor Shop!",
  "Mujtaba from Faisalabad ordered a leather jacket on Markahoor Shop!",
  "Sofia from Karachi just bought a floral dress on Markahoor Shop!",
  "Bilal from Islamabad purchased a denim vest on Markahoor Shop!",
  "Huma from Multan just bought a pair of ballet flats on Markahoor Shop!",
  "Kamran from Rawalpindi just bought a formal coat on Markahoor Shop!",
  "Mehmood from Lahore purchased a tailored shirt on Markahoor Shop!",
  "Rizwan from Karachi just bought a designer tie on Markahoor Shop!",
  "Fouzia from Faisalabad ordered a woolen hat on Markahoor Shop!",
  "Abid from Sialkot purchased a smart watch on Markahoor Shop!",
  "Alina from Lahore just bought a chic handbag on Markahoor Shop!",
  "Hassan from Karachi purchased a pair of formal shoes on Markahoor Shop!",
  "Nashit from Islamabad ordered a cozy jacket on Markahoor Shop!",
  "Jamil from Multan just bought a set of cufflinks on Markahoor Shop!",
  "Kiran from Lahore purchased a woolen scarf on Markahoor Shop!",
  "Uzma from Faisalabad just bought a pair of boots on Markahoor Shop!",
  "Salman from Peshawar purchased a leather wallet on Markahoor Shop!",
  "Zara from Rawalpindi just bought a chic blouse on Markahoor Shop!",
  "Tariq from Karachi ordered a stylish vest on Markahoor Shop!",
  "Muneeb from Lahore purchased a designer dress on Markahoor Shop!",
  "Yasmin from Rawalpindi bought a cozy sweater on Markahoor Shop!",
  "Nashit from Lahore just ordered a formal jacket on Markahoor Shop!",
  "Hina from Islamabad purchased a cozy fleece on Markahoor Shop!",
  "Farhan from Karachi just bought a stylish belt on Markahoor Shop!"
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomOrder = fakeOrders[Math.floor(Math.random() * fakeOrders.length)];
      setNotifications((prev) => [...prev, randomOrder]);

      setTimeout(() => {
        setNotifications((prev) => prev.slice(1));
      }, 2000);
    }, 8000);

    return () => clearInterval(interval);
  }, [fakeOrders]);

  return (
    <div className="notifications-container">
      {notifications.map((notification, index) => (
        <div className="notification-card" key={index}>
          {notification}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
