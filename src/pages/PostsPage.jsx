import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { blogdata } from '../data/useBlogData'

const PostsPage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading()
        }, 2000);
    }, [loading])


    return (
        <>
            {
                loading ? (
                    <p>cargando...</p>
                ) : (
                    <div>
                        <ul>
                            {blogdata.map(post => (
                                <BlogLink key={post.id} post={post} />
                            ))}
                        </ul>
                    </div>
                )
            }
        </>
    )
}

const BlogLink = ({ post }) => {
    return (
        <li>
            <Link to={`/blog/${post.id}`} >{post.title} </Link>
        </li>
    )
}

export { PostsPage }
