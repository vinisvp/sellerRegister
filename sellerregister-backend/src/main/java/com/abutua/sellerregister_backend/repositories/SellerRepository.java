package com.abutua.sellerregister_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abutua.sellerregister_backend.models.Seller;

public interface SellerRepository extends JpaRepository <Seller, Long> {   
}
