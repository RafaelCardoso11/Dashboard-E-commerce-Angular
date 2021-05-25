import { Product } from './../product-model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null as any
  }
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  
  }
  createProduct(){
    this.productService.create(this.product).subscribe(() => {
      this.productService.exibirShowConsole("Produto cadastrado com sucesso!")
      this.router.navigate(['/products'])
    })
  }
  cancel(){
    this.router.navigate(['/products'])
  }
}
