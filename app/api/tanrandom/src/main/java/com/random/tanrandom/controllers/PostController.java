package com.random.tanrandom.controllers;

import com.random.tanrandom.models.Post;
import com.random.tanrandom.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    public PostService postService;

    @GetMapping("")
    public ResponseEntity<Object> getPosts(){
        postService.getPosts();
        return new ResponseEntity<>("Solicitud procesada con exito.", HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getPost(@PathVariable Long id){
        postService.getPost(id);
        return new ResponseEntity<>("Solicitud procesada con exito.", HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Object> addPost(@RequestBody Post post){
        postService.addPost(post);
        return new ResponseEntity<>("Post creado.", HttpStatus.CREATED);
    }

    @PatchMapping("")
    public  ResponseEntity<Object> updatePost(){
        postService.updatePost();
        return new ResponseEntity<>("Solicitud procesada con exito.", HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deletePost(@PathVariable Long id){
        postService.deletePost(id);
        return new ResponseEntity<>("Post eliminado.", HttpStatus.OK);
    }
}
