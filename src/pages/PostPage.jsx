import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogdata } from '../data/useBlogData';

const PostPage = () => {

  const navigate = useNavigate();
  const { slug } = useParams();
  const blogpost = blogdata.find(blog => blog.id == slug)

  const returnBlog = () => {
    //navigate(-1) ultima url
    navigate('/blog')
  }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.autor}</p>
      <p>{blogpost.article}</p>

      <button onClick={returnBlog} >Volver</button>
    </>
  )
}

export { PostPage }
