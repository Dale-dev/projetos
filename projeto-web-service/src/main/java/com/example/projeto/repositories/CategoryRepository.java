package com.example.projeto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.projeto.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
