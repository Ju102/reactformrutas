import React, { Component } from 'react'

class Collatz extends Component {

    cajaNumero = React.createRef();

    generarColatz = (event) => {
        event.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        let aux = [numero];

        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2;
            }
            else {
                numero = numero * 3 + 1;
            }
            aux.push(numero);
        }
        this.setState({
            numeros: aux
        })
    }

    state = {
        numeros: []
    }

    render() {
        return (
            <div>
                <h1>Conjetura de Collatz</h1>
                <form onSubmit={this.generarColatz}>
                    <label>Introduzca un número: </label>
                    <input type="text" ref={this.cajaNumero} />
                    <button>Mostrar</button>
                </form>
                <ul style={{listStyle: "none"}}>
                    {
                        this.state.numeros.map((num, index) => {
                            return (<li key={index}>{num}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Collatz