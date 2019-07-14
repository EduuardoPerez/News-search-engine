import React, { Component } from 'react';

class Formulario extends Component {
  state = {
    categoria: ''
  }

  // Cuando cargue el documento
  componentDidMount(){
    this.setState({
      categoria: 'general'
    })
  }

  // Actualiza el state
  cambiarCategoria = e => {
    /*
      this.setState({
        categoria: e.target.value
      })

      // Pasarlo a la página principal para que haga la consulta
      this.props.consultarNoticias(this.state.categoria);

      De esta forma se actualizaría luego de que cambie de nuevo de
      categoría y estaría mostrándose entonces la categoría seleccionada
      anteriormente.

      Para solucionar esto setState recibe como segundo parametro
      un callback
    */
    this.setState({
      categoria: e.target.value
    }, () => {
      // Pasarlo a la página principal para que haga la consulta
      this.props.consultarNoticias(this.state.categoria);
    });
  }

  render(){
    return(
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>

            <h2>Encuentra noticias por categoría</h2>
            <div className="input-field col s12 m8 offset-m2">
              <select
                onChange={this.cambiarCategoria}
              >
                <option value="general">General</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnología</option>
              </select>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;