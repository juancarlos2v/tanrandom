package com.random.tanrandom.services;

import com.random.tanrandom.models.Post;

import java.util.Set;

public interface PostService {
    public Set<Post> getPosts();
    public Post getPost(Long id);
    public Post addPost(Post post);
    public Post updatePost();
    public void deletePost(Long id);
}
