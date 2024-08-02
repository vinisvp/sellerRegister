package com.abutua.sellerregister_backend.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.abutua.sellerregister_backend.dto.SellerRequest;
import com.abutua.sellerregister_backend.dto.SellerResponse;
import com.abutua.sellerregister_backend.service.SellerService;

@RestController
@CrossOrigin
@RequestMapping("sellers")
public class SellerController {
    
    @Autowired
    private SellerService sellerService;

    @GetMapping
    public ResponseEntity<List<SellerResponse>> getSellers(){
        return ResponseEntity.ok(sellerService.getAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<SellerResponse> getSeller(@PathVariable long id){
        return ResponseEntity.ok(sellerService.getById(id));
    }

    @PostMapping
    public ResponseEntity<SellerResponse> saveSeller(@Validated @RequestBody SellerRequest sellerRequest){
        SellerResponse seller = sellerService.save(sellerRequest);

        URI location = ServletUriComponentsBuilder
                       .fromCurrentRequest()
                       .path("/{id}")
                       .buildAndExpand(seller.getId())
                       .toUri();
        
        return ResponseEntity.created(location).body(seller);
    }

    @PostMapping("{id}")
    public ResponseEntity<Void> updateSeller(@PathVariable long id, @Validated @RequestBody SellerRequest sellerRequest){
        sellerService.update(id, sellerRequest);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> removeSeller(@PathVariable long id){
        sellerService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
