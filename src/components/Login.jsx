import React, { useState } from 'react'
import { useAuth } from '../context/auth'


const Login = () => {

    const auth = useAuth();
    const [username, setUsername] = useState('');

    const login = (e) => {
        e.preventDefault();
        console.log(username);
        auth.login(username)
    }

    return (
        <div>
            <form onSubmit={login}>
                <h3>Login</h3>
                <input
                    type="text"
                    placeholder='Usuario'
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                <button type='submit'>Login</button>
                {/* <button type='button' onClick={showLogin} >Volver</button> */}
            </form>
        </div>
    )
}

export default Login
