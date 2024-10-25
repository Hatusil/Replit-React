import React, { useEffect, useState } from 'react';
import './CardHatusil.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const CardHatusil = ({ githubUsername, linkedin, description2 }) => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const url = `https://api.github.com/users/${githubUsername}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al obtener los datos de GitHub: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setGithubData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [githubUsername]);

  if (loading) {
    return <p>Cargando datos de GitHub...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="card-hatusil" role="region" aria-labelledby="card-title">
      <img 
        className="profile-image-hatusil" 
        src={githubData.avatar_url} 
        alt={`Perfil de ${githubData.name || githubUsername}`} 
      />
      <h2 id="card-title">{githubData.name || githubUsername}</h2>
      <h3>{githubData.company || "Empresa no disponible"}</h3>
      <p>{githubData.bio || "Descripción no disponible"}</p>
      <p className="italic-text">{ description2 }</p>

      <button 
        className="show-more-button-hatusil" 
        onClick={toggleShowMore}
        aria-expanded={showMore}
        aria-controls="more-info"
      >
        {showMore ? 'Mostrar Menos' : 'Mostrar Más'}
      </button>

      {/* Contenido adicional que se muestra al hacer clic en "Mostrar Más" */}
      {showMore && (
        <div id="more-info" className="more-info">
          <p><strong>Ubicación:</strong> {githubData.location || "Ubicación no disponible"}</p>
          <p><strong>Seguidores:</strong> {githubData.followers} seguidores</p>
          <p><strong>Repositorios Públicos:</strong> {githubData.public_repos}</p>
          <p><strong>Habilidades:</strong> JavaScript, React, Node.js, AI</p>
          <p><strong>Proyectos Recientes:</strong> Ewoc-Logic, Glitch-Synth</p>
        </div>
      )}

      <div className="social-icons-hatusil" role="group" aria-label="Enlaces de redes sociales">
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Perfil de LinkedIn de ${githubData.name || githubUsername}`}
        >
          <FaLinkedin />
        </a>
        <a 
          href={githubData.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Perfil de GitHub de ${githubUsername}`}
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default CardHatusil;
