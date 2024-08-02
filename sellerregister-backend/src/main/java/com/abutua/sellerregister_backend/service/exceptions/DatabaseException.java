package com.abutua.sellerregister_backend.service.exceptions;

public class DatabaseException extends RuntimeException {
    public DatabaseException(String message){
        super(message);
    }
}
