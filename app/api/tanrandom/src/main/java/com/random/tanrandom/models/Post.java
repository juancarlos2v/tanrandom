package com.random.tanrandom.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "post")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long id;
    private String title;
    private String text;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="autor_id")
    private Autor autor;
    //private List<String> tags = new ArrayList<>();
    private String cover;
    private LocalDate date;



}
