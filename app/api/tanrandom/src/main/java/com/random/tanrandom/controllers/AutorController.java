package com.random.tanrandom.controllers;

import com.random.tanrandom.models.Autor;
import com.random.tanrandom.services.AutorService;
import com.random.tanrandom.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/autor")
public class AutorController {

    @Autowired
    public AutorService autorService;

    @GetMapping("")
    public Set<Autor> getAutors(){
        return autorService.getAutors();
    }

    @GetMapping("/{id}")
    public Autor getAutor(@PathVariable Long id){
        return autorService.getAutor(id);
    }

    @PostMapping("")
    public ResponseEntity<Object> addAutor(Autor autor){
        autorService.addAutor(autor);
        return new ResponseEntity<>("Autor creado con exito", HttpStatus.CREATED);
    }

    @PatchMapping("")
    public ResponseEntity<Object> updateAutor(@RequestBody Autor autor){
        autorService.updateAutor(autor);

        return new ResponseEntity<>("Autor actualizado con exito",HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteAutor(@PathVariable Long id){
        autorService.deleteAutor(id);
        return  new ResponseEntity<>("Autor eliminado",HttpStatus.OK);
    }

}
