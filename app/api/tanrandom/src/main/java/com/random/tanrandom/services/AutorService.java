package com.random.tanrandom.services;

import com.random.tanrandom.models.Autor;
import com.random.tanrandom.models.Post;

import java.util.Set;


public interface AutorService  {
     Set<Autor> getAutors();
     Autor getAutor(Long id);
     void addAutor(Autor autor);
     void updateAutor(Autor autor);
     void deleteAutor(Long id);


}
