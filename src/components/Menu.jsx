import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
            <div>
                <h1 style={{ fontSize: "60px" }}>MENÚ</h1>
                <ul style={{ listStyle: "none", marginLeft: "-40px" }}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/cine">Cine</a>
                    </li>
                    <li>
                        <a href="/musica">Música</a>
                    </li>
                    <li>
                        <a href="/formulario">Formulario</a>
                    </li>
                    <li>
                        <a href='/collatz'>Collatz</a>
                    </li>
                    <li>
                        <a href='/multiplicacion'>Tabla</a>
                    </li>
                    <li>
                        <a href='/multiplicacionrandom'>Tabla Aleatoria</a>
                    </li>
                                        <li>
                        <a href='/multiple'>Selección Múltiple</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu