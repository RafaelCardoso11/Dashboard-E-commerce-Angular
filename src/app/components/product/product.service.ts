import { Product } from './product-model';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"
  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  exibirShowConsole(msg:string): void{
   this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
   }
   )
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }
}
