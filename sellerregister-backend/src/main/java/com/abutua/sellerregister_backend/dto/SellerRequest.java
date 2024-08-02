package com.abutua.sellerregister_backend.dto;

import com.abutua.sellerregister_backend.models.Seller;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public class SellerRequest {
    
    @NotBlank(message = "Name can't be null")
    @Size(min = 5, max = 255, message = "Name must have min = 5 and max = 255")
    private String name;

    @NotNull(message = "Seller must have a salary")
    @Positive(message = "Salary must be higher than zero")
    private Double salary;

    @Min(value = 0, message = "The Bonus min is 0%")
    @Max(value = 100, message = "The Bonus max is 100%")
    private Double bonus;

    @NotNull(message = "Seller must have a gender")
    @Min(value = 0, message = "0 = Male and 1 = Female")
    @Max(value = 1, message = "0 = Male and 1 = Female")
    private Integer gender;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public Double getBonus() {
        return bonus;
    }

    public void setBonus(Double bonus) {
        this.bonus = bonus;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public Seller toEntity(){
        Seller seller = new Seller();

        seller.setName(name);
        seller.setSalary(salary);
        seller.setBonus(bonus);
        seller.setGender(gender);

        return seller;
    }
}
