import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrl: './seller-form.component.css'
})
export class SellerFormComponent {
  
  submitted : Boolean = false;
  formGroupSeller: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.formGroupSeller = this.formBuilder.group({
      id : {value:null, disable:true},
      name : ['', [Validators.required, Validators.minLength(5)]],
      salary : ['', [Validators.required]],
      bonus : ['', [Validators.min(0), Validators.max(100)]],
      gender : ['', [Validators.required]]
    });
  }

  save(){
    if(this.formGroupSeller.valid){
      console.log(this.formGroupSeller.value);
    }
  }

  get name() {return this.formGroupSeller.get('name')};
  get salary() {return this.formGroupSeller.get('salary')};
  get bonus() {return this.formGroupSeller.get('bonus')};
  get gender() {return this.formGroupSeller.get('gender')};
}
