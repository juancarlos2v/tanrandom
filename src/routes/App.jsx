import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/auth';
import { Main } from '../components/Main';
import Home from '../pages/Home';
import Footer from '../components/Footer'
import { PostsPage } from '../pages/PostsPage'
import { PostPage } from '../pages/PostPage'
import { ProfilePage } from '../pages/ProfilePage';
import NotFound from '../pages/NotFound';

const App = () => {
    return (
        <HashRouter>
            <AuthProvider>
                <Main />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<PostsPage />} />
                    <Route path="/blog/:slug" element={<PostPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </AuthProvider>
        </HashRouter>
    )
}

export default App
