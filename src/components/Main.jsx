import React from 'react'
import { NavLink } from 'react-router-dom'

const routes = [];
routes.push({
    id: 1,
    to: '/',
    text: 'Home'
});
routes.push({
    id: 2,
    to: '/blogs',
    text: 'Articulos'
})


const Main = () => {
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.id}>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? 'red' : 'blue',
                        })}
                            to={route.to} end>
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export { Main }
