import { Component, OnInit } from '@angular/core';
import { Seller } from '../../interfaces/Seller';
import { SellerService } from '../../services/seller.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.css'
})
export class SellersComponent implements OnInit {

  sellers: Seller[] = [];
  seller: Seller = {} as Seller;
  deleteSeller: Seller = {} as Seller;

  showForm: boolean = false;
  isEditing: boolean = false;

  constructor(private sellerService: SellerService,
              private modalService: NgbModal) {}

  loadSellers() {
    this.sellerService.getSellers().subscribe({
      next: data => this.sellers = data
    });
  }

  ngOnInit(): void {
    this.loadSellers();
  }

  newSeller() {
    this.showForm = true;
  }

  edit(seller: Seller) {
    this.seller = seller;
    this.isEditing = true;
    this.showForm = true;
  }

  save(save: boolean) {
    if (save) {
      if (!this.isEditing) {
        this.sellerService.save(this.seller).subscribe({
          next: () => this.loadSellers()
        });
      }
      else {
        this.sellerService.update(this.seller).subscribe({
          next: () => this.loadSellers()
        });
      }
    }

    this.seller = {} as Seller;
    this.isEditing = false;
    this.showForm = false;
  }

  delete(modal: any, seller : Seller){
    this.deleteSeller = seller;
    this.modalService.open(modal).result.then(
      (confirm) => {
        if(confirm) {
          this.sellerService.delete(seller).subscribe({
            next: () => this.loadSellers()
          })
        }
      }
    )
  }
}
