import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { Seller } from '../../interfaces/Seller';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  sellers : Seller[] = [];

  constructor(private sellerService : SellerService) {}
  ngOnInit(): void {
    this.sellerService.getSellers().subscribe({
      next: data => this.sellers = data
    })
  }
}
