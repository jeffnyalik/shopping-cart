import { Component, OnInit } from '@angular/core';

import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

import { CartBookService } from '../services/cart-book.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCart = faCartShopping;
  cartItems: number = 0;
  
  constructor(private bkService: CartBookService) {
    this.bkService.cartSubject.subscribe((data) =>{
      this.cartItems = data;
    })
   }

  ngOnInit(): void {
    this.cartItemFuncs();
  }

  cartItemFuncs(){
    if(localStorage.getItem('localCart') != null){
      let countCartItems = JSON.parse(localStorage.getItem('localCart') ||  '{}');
      this.cartItems = countCartItems.length;
      console.log("Cart items here....",countCartItems);
    }
  }

}
