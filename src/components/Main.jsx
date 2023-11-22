import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/auth';
import { SpotifyIcon } from '../icons/SpotifyIcon'
import Login from './Login';
import '../styles/components/main.css'

const routes = [];
routes.push({
    id: 1,
    to: '/',
    text: 'Home',
    private: false
});
routes.push({
    id: 2,
    to: '/blog',
    text: 'Notas',
    private: false
});
routes.push({
    id: 3,
    to: '/chapters',
    text: 'Episodios Completos',
    private: false
});
routes.push({
    id: 4,
    to: '/contacto',
    text: 'Contacto',
    private: false
});
// routes.push({
//     id: 3,
//     to: '/profile',
//     text: 'Perfil',
//     private: true
// });
// routes.push({
//     id: 4,
//     to: '/login',
//     text: 'Login',
//     publicOnly: true
// });



const Main = () => {

    const auth = useAuth();

    return (
        <nav>
            <div className="banner">
                <div className="phone"></div>
                <div className='title'>
                    <h1>ESCUCHA LOS EPISODIOS</h1>
                    <h1>  COMPLETOS EN SPOTIFY</h1>
                </div>
            </div>
            <div className='container'>
                {routes.map(route => {
                    if (route.private && !auth.user) return null
                    return (
                        <div key={route.to}>
                            <NavLink className='route-container' style={({ isActive }) => ({
                                color: isActive ? 'white' : 'white',
                            })}
                                to={route.to} end>
                                {route.text}
                            </NavLink>
                        </div>
                    )
                })}
            </div>

            {/* <Login /> */}

        </nav>
    )
}

export { Main }
