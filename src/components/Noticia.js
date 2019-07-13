import React from 'react';

/*
  Un buen lugar para escribir código estándar de JS es antes del return
  por eso en este caso se está dejando aunque sea un stateless functional
  component. El no colocarlo se hace como una manera de resumir código.
*/
const Noticia = ({noticia}) => {

  // Extraer los datos

  const { urlToImage, url, title, description, source } = noticia;

  return(
    <div className="col s12 m6 l4">
      <div className="card">

        <div className="card-image">
          <img src={urlToImage} alt={title}/>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">
            Ver noticia completa
          </a>
        </div>

      </div>
    </div>
  );
}

export default Noticia;