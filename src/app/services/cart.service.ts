import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
 
  private cartCountSubject = new BehaviorSubject<number>(0); // ✅ Private subject
  cartCount$ = this.cartCountSubject.asObservable();         // ✅ Public observable

  constructor() {
    this.loadCartFromStorage();
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.updateCartCount();
    this.saveToLocalStorage();
    alert(this.cartItems.length);
  }

  public saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private loadCartFromStorage() {
    const stored = localStorage.getItem('cart');
    if (stored) {
      this.cartItems = JSON.parse(stored);
      this.updateCartCount();
    }
  }
  getItems(): any[] {
    return this.cartItems;
  }
  updateCart(items: any[]) {
    this.cartItems = items;
    this.cartCountSubject.next(this.cartItems.length);
    this.saveToLocalStorage();
  }
  private updateCartCount() {
    this.cartCountSubject.next(this.cartItems.length); // ✅ Now this works
  }

  clearCart() {
    this.cartItems = [];
    this.cartCountSubject.next(0);
    this.saveToLocalStorage();
  }

getTotal(): number {
  return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}
}
