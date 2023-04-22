import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../products.interface';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css'],
})
export class ProductInsertComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder, private service: ProductsService) {
    this.form = this.fb.group({
      product: ['', [Validators.required, Validators.minLength(5)]],
      cost: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      
    });
  }



  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      const product = this.form.value as Product;
      this.service.insertProduct(product).subscribe((response) => {
        console.log(response);
      });
    } else {
      console.log('Form is not valid');
    }
  }
}
