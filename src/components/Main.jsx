import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/auth';
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
                <p>...</p>
            </div>
            <ul>
                {routes.map(route => {
                    if (route.private && !auth.user) return null
                    return (
                        <li key={route.to}>
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? 'white' : 'white',
                            })}
                                to={route.to} end>
                                {route.text}
                            </NavLink>
                        </li>)
                })}
            </ul>

            <Login />

        </nav>
    )
}

export { Main }
