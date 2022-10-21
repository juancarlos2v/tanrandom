import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login';

const routes = [];
routes.push({
    id: 1,
    to: '/',
    text: 'Home'
});
routes.push({
    id: 2,
    to: '/blog',
    text: 'Notas'
});


const Main = () => {
    const [login, setLogin] = useState(false)
    const showLogin = () => {
        setLogin(!login)
    }

    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.to}>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? 'red' : 'blue',
                        })}
                            to={route.to} end>
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <Login />
            {/* {
                showLogin? <Login />
                
            } */}
        </nav>
    )
}

export { Main }
