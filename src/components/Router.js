import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component } from 'react'
import Home from './Home';
import Cine from './Cine';
import Musica from './Musica';
import FormSimple from './FormSimple';
import Collatz from './Collatz';
import TablaMultiplicar from './TablaMultiplicar';
import TablaMultiplicar2 from './TablaMultiplicarv2';
import SeleccionMultiple from './SeleccionMultiple';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/cine" element={<Cine />} />
                    <Route path='/musica' element={<Musica />} />
                    <Route path="/formulario" element={<FormSimple />} />
                    <Route path='/collatz' element={<Collatz />} />
                    <Route path='/multiplicacion' element={<TablaMultiplicar />} />
                    <Route path='/multiplicacionrandom' element={<TablaMultiplicar2 />} />
                    <Route path='/multiple' element={<SeleccionMultiple />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;