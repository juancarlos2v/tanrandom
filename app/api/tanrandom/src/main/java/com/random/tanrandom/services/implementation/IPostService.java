package com.random.tanrandom.services.implementation;

import com.random.tanrandom.models.Post;
import com.random.tanrandom.repositories.PostRepository;
import com.random.tanrandom.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class IPostService implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Override
    public List<Post> getPosts() {
        return (List<Post>) postRepository.findAll();
    }

    @Override
    public Post getPost(Long id) {
        return postRepository.findById(id).orElse(null);
    }

    @Override
    public void addPost(Post post) {
        postRepository.save(post);
    }

    @Override
    public void updatePost(Long id, Post post) {
        Post p=getPost(id);
        p.setTitle(post.getTitle());
        p.setText(post.getText());
        p.setAutor(post.getAutor());
        p.setCover(post.getCover());
        p.setDate(post.getDate());
        postRepository.save(p);

    }

    @Override
    public void deletePost(Long id) {
        Post post= getPost(id);
        postRepository.delete(post);
    }
}
