import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product A', price: 100, description: 'Description A' },
    { id: 2, name: 'Product B', price: 150, description: 'Description B' },
    { id: 3, name: 'Product C', price: 200, description: 'Description C' }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}
