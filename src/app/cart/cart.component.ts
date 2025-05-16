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
totalPrice: number = 0;

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

increaseQuantity(item: any) {
  item.quantity += 1;
  this.cartService.saveToLocalStorage();
  this.calculateTotal();
}
decreaseQuantity(item:any){
    if (item.quantity > 1) {
  item.quantity -= 1;
  this.cartService.saveToLocalStorage();
   this.calculateTotal();
    }
}

// calculateTotal() {
//   this.totalPrice = this.cartService.getTotal();
// }

calculateTotal() {
  this.totalPrice = this.cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
}
}
