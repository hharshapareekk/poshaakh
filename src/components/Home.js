import { useEffect, useState } from 'react';
import image1 from '../images/notifications.png';
import About from "./About";
import Featured from "./Featured";
import Gallery from "./Gallery";
import Hero from "./Hero";

const Home = () => {
  const [notification, setNotification] = useState('');
  const notificationMessages = [
   "Let's make your wardrobe crush-worthy.",
    "Who needs a date when you can have a new outfit?",
    "Fashion emergency? Poshaakh to the rescue!",
    "Swipe right on our latest collection and let sparks fly!",
    "Our styles are like first dates—exciting and unforgettable.",
    "You + Poshaakh = perfect match.",
  ];

  useEffect(() => {
    let intervalId;
    const changeNotification = () => {
      const randomIndex = Math.floor(Math.random() * notificationMessages.length);
      const randomMessage = notificationMessages[randomIndex];
      setNotification(randomMessage);
    };
    intervalId = setInterval(changeNotification, 5000); 
    return () => {
      clearInterval(intervalId);
    };
  }, [notificationMessages]);

  return (
    <div>
      <Hero />
      <Featured />
      <About />
      <Gallery />
      <div className="chat-container">
        <div className="chat-bubble">
          <div className="chat-avatar">
            <img src={image1}  alt="Assistant Avatar" />
          </div>
          <div className="chat-message">
            <p>{notification}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;