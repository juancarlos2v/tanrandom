import React from 'react'
import { useParams } from 'react-router-dom'
import { blogData } from '../data/useBlogData';

const PostPage = () => {
  const { slug } = useParams();
  const post = blogData.find(post.id === slug)

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.autor}</p>
      <p>{post.description}</p>
    </>
  )
}

export { PostPage }
