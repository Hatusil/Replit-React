import React, { useState } from 'react';
import './TeamCards.css';
import CardCharly from './CardCharly';
import Popup from './Popup';

const TeamCards = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const handleCardClick = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

  return (
    <div className="team-cards">
      <h1 className="team-title">Bienvenidos a HiFiveDevelopers</h1>
      <p className="team-intro">
        Conoce a nuestro talentoso equipo de desarrolladores.
      </p>

      <div className='teams-cards-container'>
        <div className='random-card' onClick={() => handleCardClick(<CardCharly />)}>
          <h2 className="card-name">Card 1</h2>
        </div>
        <div className='random-card' onClick={() => handleCardClick(<CardCharly />)}>
          <h2 className="card-name">Card 2</h2>
        </div>
        <div className='random-card' onClick={() => handleCardClick(<CardCharly />)}>
          <h2 className="card-name">Card 3</h2>
        </div>
        <div className='random-card' onClick={() => handleCardClick(<CardCharly />)}>
          <h2 className="card-name">Card 4</h2>
        </div>
        <div className='random-card' onClick={() => handleCardClick(<CardCharly />)}>
          <h2 className="card-name">Card 5</h2>
        </div>
        <div className='random-card' onClick={() => handleCardClick(<CardCharly />)}>
          <h2 className="card-name">Card 6</h2>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup} content={popupContent} />
    </div>
  );
};

export default TeamCards;