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
      <img 
        className="team-logo" 
        src="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/e5/46/51/e5465126-9028-eefa-ab2c-1f68ead463ee/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" 
        alt="Logo de HiFiveDevelopers" 
      />
      <h1 className="team-title">Bienvenidos a HiFiveDevelopers</h1>
      <p className="team-intro">
        Conoce a nuestro talentoso equipo de desarrolladores. Aquí podrás ver 
        las tarjetas personales de cada integrante, donde comparten un poco sobre 
        sí mismos, sus habilidades y enlaces a sus perfiles profesionales.
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