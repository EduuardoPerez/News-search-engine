import React, { Component } from 'react';
import { async } from 'q';

class App extends Component{
  state = {}

  // Se recomienda llamar una API cuando el documento está listo
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
    return(<h1>Noticias API React</h1>);
  }
}

export default App;
