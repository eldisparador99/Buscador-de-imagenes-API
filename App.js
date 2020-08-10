import React, { Component } from 'react';

import './assests/css/App.css';


// Componentes

import Buscador from "./components/Buscador"
import Resultado from "./components/Resultado"


/*function holaMundo(nombre,edad){
  var presentacion = <div>
    <h1>hola mi nombre es {nombre}</h1>
    <h2>tengo {edad}</h2>
</div>

    return presentacion;
  
}*/





class App extends Component {
   nombre = "emergio carvajal"

    state={
    termino: '',
    imagenes: [],
    pagina:''
  }

  scroll = () =>{
    const elemento = document.querySelector(".jumbotron")
    elemento.scrollIntoView("smooth","start");
  }

    paginaSiguiente= () =>{
      let pagina = this.state.pagina

      pagina++;

      this.setState({
        pagina
      }, () => {
        this.consultarApi();
        this.scroll();
      })

      
    }

    paginaAnterior= () =>{
      let pagina = this.state.pagina

        if(pagina === 1) return null;

      pagina--;

      this.setState({
        pagina
      }, ()=>{
        this.consultarApi();
        this.scroll();
      })

      
    }


  consultarApi = ()=>{
    const termino = this.state.termino
    const pagina = this.state.pagina
    const url = `https://pixabay.com/api/?key=17219180-9f62d7a9cd68a2541672feb25&q=${termino}&page=${pagina}`

   
    
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))

  }

  
  datosBusquedas=(termino)=> {
    
    this.setState({
      termino : termino,
      pagina: 1
    }, ()=>{
      this.consultarApi();
    }) 
}
render(){
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center"> Buscador de imagenes</p>
        
        <Buscador 
        datosBusquedas={this.datosBusquedas}
        />
      </div>

      <div className="row justify-content-center">

      <Resultado
      imagenes={this.state.imagenes}
      paginaAnterior={this.paginaAnterior}
      paginaSiguiente={this.paginaSiguiente}
      />
      </div>

      
      

    </div>
    

  );
}
}

export default App;
