import React, { Component } from 'react'

class TablaMultiplicar2 extends Component {
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

        this.setState({
            tabla: rows
        });
    }

    generarTabla2 = () => {
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

        this.setState({
            tabla: rows
        });



    }

    generarAleatorios = () => {
        let aux = [];
        for (var i = 1; i <= 5; i++) {
            aux.push(parseInt(Math.random() * 10) + 1);
        }

        return aux;
    }

    generarAleatorios2 = () => {
        for (var i = 1; i <= 5; i++) {
            var random = parseInt(Math.random() * 10) + 1;
            this.opciones.push(random);
        }
    }

    state = {
        tabla: [],
    }

    opciones = this.generarAleatorios();

render() {
    return (
        <div>
            <h1>Tabla de Multiplicar</h1>
            <form onSubmit={this.generarTabla}>
                <label>Selecciona un numero: </label>
                <select ref={this.cajaNumero}>
                    {
                        this.opciones.map((numero, index) => {
                            return (<option key={index}>{numero}</option>)
                        })
                    }
                </select>
                <button>Calcular</button>
            </form>

            {/* 
                <label>Selecciona un numero: </label>
                <select ref={this.cajaNumero} onLoad={this.generarTabla2} onChange={this.generarTabla2}>
                    {
                        this.opciones.map((numero, index) => {
                            return (<option key={index}>{numero}</option>)
                        })
                    }
                </select>
                */}

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
            </table><br></br>
        </div>
    )
}
}

export default TablaMultiplicar2;