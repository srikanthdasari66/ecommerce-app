import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {

    this.productService.getProducts().subscribe(data =>{
      this.products = data;
    })
  }
}
