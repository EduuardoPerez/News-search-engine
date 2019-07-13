import React, { Component, Fragment } from 'react';
import Header from './components/Header';

class App extends Component{
  state = {}

  // carga la API cuando el documento es listo
  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&apiKey=64894da34df448a5af3268a7a15778ea`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    })
  }

  render(){
    return(
      <Fragment>
        <Header 
          titulo='Noticias React API'
        />

        <div className="container white contenedor-noticias">

        </div>
      </Fragment>
    );
  }
}

export default App;
