import React, { Component } from 'react';

// Componente hijo.
function EstadoAHijo(props){
    return(
        <div>
            <h3>{ props.contadorHijo }</h3>
        </div>
    )
}

//Componente padre
class Estado extends Component {
    constructor(props){
        super(props);

        // Inicializar el estado
        this.state = {
            contador: 0
        }

        // Modificar el estado.
        setInterval(()=>{
            this.setState({
                contador:this.state.contador + 1 
            })
        }, 1000);

    }

    render() {
        return (
            <div>
                <h2> El State</h2>
               { /* Mostrar el estado */ }
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={ this.state.contador } />
            </div>

        );
    }

}

export default Estado;

