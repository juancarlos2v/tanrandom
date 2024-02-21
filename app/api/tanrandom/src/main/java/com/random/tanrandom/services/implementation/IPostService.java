package com.random.tanrandom.services.implementation;

import com.random.tanrandom.models.Post;
import com.random.tanrandom.repositories.PostRepository;
import com.random.tanrandom.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class IPostService implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Override
    public Set<Post> getPosts() {
        return null;
    }

    @Override
    public Post getPost(Long id) {
        return null;
    }

    @Override
    public Post addPost(Post post) {
        return null;
    }

    @Override
    public Post updatePost() {
        return null;
    }

    @Override
    public void deletePost(Long id) {

    }
}
