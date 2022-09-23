import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            {' '}
            {/*encapsula la navegacion de la app*/}

            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/articulos" element={<Articulos />} />
                  <Route path="/checkout/information" element={<Information />} />
                  <Route path="/checkout/payment" element={<Payments />} />
                  <Route path="/checkout/success" element={<Success />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App
