import React from 'react'
import { AuthProvider, useAuth } from '../context/auth'

const ProfilePage = () => {

    const auth = useAuth();


    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    }

    return (
        <div>
            <p>Profile</p>
            <form onSubmit={logout}>
                <button type='submit'>Logout</button>
            </form>
        </div>
    )
}

export { ProfilePage }
