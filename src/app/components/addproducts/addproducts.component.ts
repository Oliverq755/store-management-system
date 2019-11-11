import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BackEndApiService } from 'src/app/services/back-end-api.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {

  addProductForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private backEndAPI: BackEndApiService
  ) { 
    this.addNewExpensesData();
  }

  ngOnInit() {
  }

  addNewExpensesData() {
    let formObj =
    {
      PRODUCT_CATEGORY: ['', [Validators.required]],
      PRODUCT_ITEM_NAME: ['', [Validators.required]],
      PRODUCT_AMOUNT: ['', [Validators.required]],
      PRODUCT_DATE: ['', [Validators.required]]
    }
    this.addProductForm = this.formBuilder.group(formObj);
  }

}
