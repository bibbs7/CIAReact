package com.splitit.Repository;

import org.springframework.stereotype.Repository;
import  com.splitit.Models.Product;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {


}