import React, { Component } from 'react'

class SeleccionMultiple extends Component {

    seleccionMultiple = React.createRef();

    mostrarSeleccionados = (event) => {
        event.preventDefault();
        let opciones = this.seleccionMultiple.current.options;
        var data = ""

        // Debemos recorrer todas las opciones
        // Dentro de cada opción individual, tenemos un atributo llamado selected para averiguar si esta seleccionado     
        for (var opt of opciones) {
            if (opt.selected === true) {
                console.log(opt.value);
                data += opt.value + " ";
            }
        }

        this.setState({
            seleccionados: data
        });
    }

    state = {
        seleccionados: ""
    }

    render() {
        return (
            <div>
                <h1>Selección Múltiple</h1>
                <p style={{ color: "blue" }}><b>Selección:</b> {this.state.seleccionados}</p>
                <form onSubmit={this.mostrarSeleccionados}>
                    <label>Selecciona varios elementos:</label><br /><br />
                    <select size="10" multiple ref={this.seleccionMultiple}>
                        <option>Opción 1</option>
                        <option>Opción 2</option>
                        <option>Opción 3</option>
                        <option>Opción 4</option>
                        <option>Opción 5</option>
                        <option>Opción 6</option>
                        <option>Opción 7</option>
                        <option>Opción 8</option>
                        <option>Opción 9</option>
                        <option>Opción 10</option>
                    </select><br /><br />
                    <button>Mostrar</button>
                </form>
            </div>
        )
    }
}

export default SeleccionMultiple