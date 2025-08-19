package com.janindarukshan.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.janindarukshan.backend.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
