import React, {Component} from 'react';

// componente con la arrow function 
const Componente = (props) => <h2> {props.msg }</h2>


/*
// compomente basado en funciones
function Componente(props) {
    return (
        <h2> {props.msg} </h2>
    )

}
*/

/*

// Componente basado en clases
class Componente extends Component {
    render() {
        return (
            <h2> {this.props.msg} </h2>
        )
    }

}

*/

export default  Componente;