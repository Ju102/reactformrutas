import React, { Component } from 'react'

class TablaMultiplicar extends Component {
    cajaNumero = React.createRef();

    generarTabla = (event) => {
        event.preventDefault();
        let rows = []
        let numero = parseInt(this.cajaNumero.current.value);

        for (var i = 1; i <= 10; i++) {
            var operacion = numero + "x" + i;
            var resultado = numero * i;

            let fila = {
                operacion: operacion,
                resultado: resultado
            }

            rows.push(fila);

        }

        // var factor = 1;
        // while (factor <= 10) {
        //     var resultado = numero * factor;
        //     var fila = (
        //         <tr><td>{numero} x {factor}</td><td>{resultado}</td></tr>
        //     )
        //     rows.push(fila);
        //     factor++;
        // }

        this.setState({
            tabla: rows
        });
    }

    state = {
        tabla: []
    }

    render() {
        return (
            <div>
                <h1>Tabla de Multiplicar</h1>
                <form onSubmit={this.generarTabla}>
                    <label>Introduce el número: </label>
                    <input type='text' ref={this.cajaNumero} />
                    <button>Calcular</button>
                </form>
                <hr />
                <table border="1">
                    <thead>
                        <tr>
                            <th>Operación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tabla.map((fila, index) => {
                                return (<tr key={index}><td>{fila.operacion}</td><td>{fila.resultado}</td></tr>)
                                // return (fila);
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TablaMultiplicar;