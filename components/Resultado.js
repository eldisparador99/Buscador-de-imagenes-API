import React from 'react';

import Imagen from './Imagen'
import Paginador from './Paginador';

class Resultado extends React.Component{ 

    mostraImagenes = ()=>{
        const imagenes = this.props.imagenes

        if(imagenes.length === 0) return null

        console.log(imagenes)

        return (
        <React.Fragment>
            <div className="col-12 p-5 row">
                {imagenes.map(imagen => (
                    <Imagen
                    key={imagen.id}
                    imagen={imagen}
                    
                    />
                ))}
            </div>

            <Paginador
            paginaAnterior={this.props.paginaAnterior}
            paginaSiguiente={this.props.paginaSiguiente}
            />
        </React.Fragment>)
    }

    render() {
    return( <React.Fragment>{this.mostraImagenes()}</React.Fragment>)
    }



}

export default Resultado;