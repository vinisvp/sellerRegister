import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Seller } from '../../interfaces/Seller';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrl: './seller-form.component.css'
})
export class SellerFormComponent implements OnChanges {

  submitted : Boolean = false;
  formGroupSeller: FormGroup;

  @Input()
  seller : Seller = {} as Seller;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupSeller = this.formBuilder.group({
      id : {value:null, disable:true},
      name : ['', [Validators.required, Validators.minLength(5)]],
      salary : ['', [Validators.required, Validators.min(Number.MIN_VALUE)]],
      bonus : ['0', [Validators.required, Validators.min(0), Validators.max(100)]],
      gender : ['', [Validators.required]]
    });
  }

  ngOnChanges(): void {
    if(this.seller.id){
      this.formGroupSeller.setValue(this.seller);
    }
  }

  @Output()
  saveEmitter = new EventEmitter();

  save(){
    if(this.formGroupSeller.valid){
      Object.assign(this.seller, this.formGroupSeller.value);
      this.saveEmitter.emit(true);
    }
  }

  cancel(){
    this.saveEmitter.emit(false);
  }

  get name() {return this.formGroupSeller.get('name')};
  get salary() {return this.formGroupSeller.get('salary')};
  get bonus() {return this.formGroupSeller.get('bonus')};
  get gender() {return this.formGroupSeller.get('gender')};
}
