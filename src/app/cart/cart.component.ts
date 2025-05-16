import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: any[] = [];
  total = 0;


  constructor(private cartService:CartService){

  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.cartService.updateCart(this.cartItems); 
    // this.calculateTotal();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
    this.total = 0;
  }
  ngOnInit(){
    this.cartItems= this.cartService.getItems();
    console.log('Cart items:', this.cartItems);
  }


}
