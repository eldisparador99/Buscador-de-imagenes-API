import React from 'react';


class MiComponente extends React.Component{
    
    render(){
        let receta ={
        nombre : "pizza",
        ingredientes: ['salsa','queso','jamon'],
        calorias: 400
    }

        return(
            <div>
            <h2>{"Receta:" + receta.nombre}</h2>
            <h2>{"Calorias:" + receta.calorias}</h2>
            <ol>
                <h2>
                    {receta.ingredientes.map((ingredientes, i)=>{
                    console.log(ingredientes)
                    return(
                        <li key={i}>
                            {ingredientes}

                        </li>
                    );
                    })}
                </h2>
            </ol>
            </div>
        );
    }

}

export default MiComponente;