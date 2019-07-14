import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component{
  state = {
    noticias: []
  }

  // carga la API cuando el documento es listo
  componentDidMount(){
    this.consultarNoticias();
  }

  /*
    Este método se creo aparte porque pasara por prop desde Formulario
    y no es recomendable utilizar los metodos de ciclo de vida para 
    ser pasados por prop

    Este trozo de codigo es el que se utilizará de manera general cuando
    se utilice class component y se quiera consumir una API
  */
  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=64894da34df448a5af3268a7a15778ea`;

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
          <Formulario 
            consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
