import React,  { Component } from 'react'

export default class Padre extends Component {
    state = {
        contador: 0
    }

    incrementarContador = ((e)  => {
        this.setState({ 
            contador: this.state.contador + 1
        })
    })
    render() {
        return (
            <>
                <h2> Comunicacion entre componentes</h2>
                <p> Contador: <b>{ this.state.contador }</b></p>
                <Hijo incrementarContador = {this.incrementarContador}  mensaje = "Mensaje para el componente hijo1"/>
                <Hijo incrementarContador = {this.incrementarContador} mensaje = "Mensaje para el componente hijo2"/>
            </>
        )
    }
}

function Hijo(props){
    return (
        <>
            <h4>{ props.mensaje }</h4>
            <button onClick={ props.incrementarContador }> + </button>
        </>
    );
}