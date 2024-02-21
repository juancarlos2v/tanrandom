package com.random.tanrandom.services;

import com.random.tanrandom.models.Post;

import java.util.Set;


public interface AutorService  {
     Set<Post> getPosts();
     void getPost(Long id);
     void addPost();
     void updatePost(Long id);
     void deletePost(Long id);


}
