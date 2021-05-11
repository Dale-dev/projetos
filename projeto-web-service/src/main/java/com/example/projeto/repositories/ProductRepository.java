package com.example.projeto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.projeto.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
