import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  cartCount = 0;

constructor(private cartservice:CartService){

  this.cartservice.cartCount$.subscribe(count => {
    this.cartCount = count;
  });
}
}
