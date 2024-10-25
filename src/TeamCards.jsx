import React, { useState } from 'react';
import './TeamCards.css';
import Popup from './Popup';
import CardCharly from './CardCharly';
import CardHatusil from './CardHatusil';

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
      <img 
        className="team-logo" 
        src="./public/img/logo.png"
        alt="Team Logo"
      />
      <h1 className="team-title">Bienvenidos a HiFive Developers</h1>
      <p className="team-intro">
        Conoce a nuestro talentoso equipo de desarrolladores. Aquí podrás ver 
        las tarjetas personales de cada integrante, donde comparten un poco sobre 
        sí mismos, sus habilidades y enlaces a sus perfiles profesionales.
      </p>

      <div className='teams-cards-container'>
        <div className='random-card' onClick={() => handleCardClick(<CardCharly />)}>
          <h2 className="card-name">Card 1</h2>
        </div>
        <div className='random-card' onClick={() => handleCardClick(<CardHatusil githubUsername="Hatusil" linkedin="https://www.linkedin.com/in/ricardo-gieco-520565143/" />)}>
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
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup} content={popupContent} />
    </div>
  );
};

export default TeamCards;