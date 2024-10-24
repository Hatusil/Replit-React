import React, { useState } from 'react';
import './CardCharly.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const CardCharly = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card-charly" role="region" aria-labelledby="card-title">
      <img 
        className="profile-image-charly" 
        src="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/e5/46/51/e5465126-9028-eefa-ab2c-1f68ead463ee/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" 
        alt="Perfil de Charly" 
      />
      <h2 id="card-title">ChatGpt</h2>
      <p>¡Soy tan bueno diseñando que pronto Hatusil me pedirá que le diseñe su vida!</p>

      <button 
        className="show-more-button-charly" 
        onClick={toggleShowMore}
        aria-expanded={showMore}
        aria-controls="more-info"
      >
        {showMore ? 'Mostrar Menos' : 'Mostrar Más'}
      </button>

      {showMore && (
        <div id="more-info" className="more-info">
          <p><strong>Habilidades:</strong> Realizar trabajos prácticos de Frontend.</p>
          <p><strong>Proyectos Recientes:</strong> TP1 de Hifive-Developpers</p>
        </div>
      )}

      <div className="social-icons-charly" role="group" aria-label="Enlaces de redes sociales">
        <a 
          href="https://www.linkedin.com/in/natalia/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Perfil de LinkedIn de Charly"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/natalia" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Perfil de GitHub de Charly"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default CardCharly;
