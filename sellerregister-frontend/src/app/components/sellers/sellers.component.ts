import { Component } from '@angular/core';
import { Seller } from '../../interfaces/Seller';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.css'
})
export class SellersComponent {

  sellers : Seller[] = [
    {
      id: 1,
      name: "Marco Antonio",
      salary: 5000,
      bonus: 10,
      gender: 0
    },
    {
      id: 2,
      name: "Ana Rodriguez",
      salary: 2500,
      bonus: 2,
      gender: 1
    }
  ];

  seller : Seller = {} as Seller;
  showForm : boolean = false;

  newSeller(){
    this.showForm = true;
  }

  save(save: boolean){
    if(save){
      console.log(this.seller);
    }

    this.seller = {} as Seller;
    this.showForm = false;
  }
}
