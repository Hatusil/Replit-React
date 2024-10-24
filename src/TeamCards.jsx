import React from 'react';
import './TeamCards.css';

const TeamCards = () => {
  return (
    <div className="team-cards">
      <h1 className="team-title">Bienvenidos a HiFiveDevelopers</h1>
      <p className="team-intro">
        Conoce a nuestro talentoso equipo de desarrolladores. Aquí podrás ver 
        las tarjetas personales de cada integrante, donde comparten un poco sobre 
        sí mismos, sus habilidades y enlaces a sus perfiles profesionales.
      </p>

      <div className='teams-cards-container'>
        <div className='random-card'>
          <h2 className="card-name">Card 1</h2>
        </div>
        <div className='random-card'>
          <h2 className="card-name">Card 2</h2>
        </div>
        <div className='random-card'>
          <h2 className="card-name">Card 3</h2>
        </div>
        <div className='random-card'>
          <h2 className="card-name">Card 4</h2>
        </div>
        <div className='random-card'>
          <h2 className="card-name">Card 5</h2>
        </div>
        <div className='random-card'>
          <h2 className="card-name">Card 6</h2>
        </div>
      </div>
      {/* Agregar más tarjetas cuando los miembros del equipo las proporcionen */}
    </div>
  );
};

export default TeamCards;