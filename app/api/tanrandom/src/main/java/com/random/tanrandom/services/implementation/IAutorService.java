package com.random.tanrandom.services.implementation;

import com.random.tanrandom.models.Autor;
import com.random.tanrandom.models.Post;
import com.random.tanrandom.repositories.AutorRepository;
import com.random.tanrandom.services.AutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class IAutorService implements AutorService {

    @Autowired
    public AutorRepository autorRepository;


    @Override
    public Set<Autor> getAutors() {
        return null;
    }

    @Override
    public Autor getAutor(Long id) {
        return autorRepository.findById(id).orElse(null);
    }

    @Override
    public void addAutor(Autor autor) {
        autorRepository.save(autor);
    }

    @Override
    public void updateAutor(Autor autor) {
        Autor autorUpdate =getAutor(autor.getId());
        autorUpdate.setName(autor.getName());
        autorUpdate.setLastName(autor.getLastName());

        autorRepository.save(autor);
    }

    @Override
    public void deleteAutor(Long  id) {
        autorRepository.delete(getAutor(id));
    }
}
