import React, { Component } from 'react'

class FormSimple extends Component {

    cajaNombre = React.createRef();

    peticionFormulario = (event) => {
        event.preventDefault();
        console.log("Realizando petición...");
        // Recuperar el valor de un objeto REACT
        let nombre = this.cajaNombre.current.value;
        console.log("Nombre recibido: " + nombre)
    }

    render() {
        return (
            <div>
                <h1>Formulario</h1>
                <form onSubmit={this.peticionFormulario}>
                    <label>Nombre: </label>
                    <input type='text' ref={this.cajaNombre} /><br /><br />
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}

export default FormSimple;