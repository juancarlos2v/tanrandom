import React, { useEffect, useState } from 'react'
import { blogData } from '../data/useBlogData'

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
                            {blogData.map(post => (
                                <li>
                                    <h3>{post.title}</h3>
                                    <p>{post.autor}</p>
                                    <p>{post.article} </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </>
    )
}

export { PostsPage }
