package com.random.tanrandom.services.implementation;

import com.random.tanrandom.models.Post;
import com.random.tanrandom.services.AutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class IAutorService implements AutorService {

   


    @Override
    public Set<Post> getPosts() {
        return null;
    }

    @Override
    public void getPost(Long id) {

    }

    @Override
    public void addPost() {

    }

    @Override
    public void updatePost(Long id) {

    }

    @Override
    public void deletePost(Long id) {

    }
}
