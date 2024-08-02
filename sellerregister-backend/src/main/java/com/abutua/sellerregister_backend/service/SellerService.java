package com.abutua.sellerregister_backend.service;

import java.util.List;
import java.util.stream.Collectors;

import com.abutua.sellerregister_backend.repositories.SellerRepository;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abutua.sellerregister_backend.dto.SellerRequest;
import com.abutua.sellerregister_backend.dto.SellerResponse;
import com.abutua.sellerregister_backend.models.Seller;

@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<SellerResponse> getAll() {
        return sellerRepository.findAll()
                            .stream()
                            .map(c -> c.toDTO())
                            .collect(Collectors.toList());
    }

    public SellerResponse getById(long id) {
        Seller seller = sellerRepository.findById(id)
                        .orElseThrow(() -> new EntityNotFoundException("Seller not found"));

        return seller.toDTO();
    }

    public SellerResponse save(SellerRequest sellerRequest) {
        Seller seller = sellerRepository.save(sellerRequest.toEntity());
        return seller.toDTO();
    }

    public void update(long id, SellerRequest sellerRequest){
        try {
            Seller seller = sellerRepository.getReferenceById(id);

            seller.setName(sellerRequest.getName());
            seller.setSalary(sellerRequest.getSalary());
            seller.setBonus(sellerRequest.getBonus());
            seller.setGender(sellerRequest.getGender());

            sellerRepository.save(seller);
        }
        catch(EntityNotFoundException e){
            throw new EntityNotFoundException("Seller not found");
        }
    }

    public void deleteById(long id){
        if (sellerRepository.existsById(id)) {
            sellerRepository.deleteById(id);
        }
        else {
            throw new EntityNotFoundException("Seller not found");
        }
    }
}
