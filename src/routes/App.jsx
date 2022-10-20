import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../components/Main';
import Home from '../pages/Home';
import Footer from '../components/Footer'
import { PostsPage } from '../pages/PostsPage'
import { PostPage } from '../pages/PostPage'
import NotFound from '../pages/NotFound';

const App = () => {
    return (
        <HashRouter>
            <Main />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<PostsPage />} />
                <Route path="/blog/:slug" element={<PostPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />

        </HashRouter>
    )
}

export default App
