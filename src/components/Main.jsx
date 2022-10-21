import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/auth';
import Login from './Login';

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
    to: '/profile',
    text: 'Perfil',
    private: true
});
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
            <ul>
                {routes.map(route => {
                    if (route.private && !auth.user) return null
                    return (
                        <li key={route.to}>
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? 'red' : 'blue',
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
