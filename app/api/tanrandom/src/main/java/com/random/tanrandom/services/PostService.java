package com.random.tanrandom.services;

import com.random.tanrandom.models.Post;

import java.util.List;
import java.util.Set;

public interface PostService {
     List<Post> getPosts();
     Post getPost(Long id);
    void addPost(Post post);
    void  updatePost(Long id, Post post);
     void deletePost(Long id);
}
