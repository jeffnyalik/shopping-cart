import { Component, OnInit } from '@angular/core';

import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

import { CartBookService } from '../../services/cart-book.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  faTrash = faTrashAlt
  constructor(private bkService: CartBookService) { }

  ngOnInit(): void {
    this.cartDetails();
    this.loadCart();
  }

  getCartDetails:any = [];
  cartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');
      console.log(this.getCartDetails)
    }
  }

  incQty(bookId:any, qnt:any){
    for(let i =0; i < this.getCartDetails.length; i++){
      if(this.getCartDetails[i].bookId === bookId){
        if(qnt !=5)
        this.getCartDetails[i].qnt = parseInt(qnt) + 1
      }
    }

    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  decQty(bookId:any, qnt:any){
    for(let i =0; i < this.getCartDetails.length; i++){
      if(this.getCartDetails[i].bookId === bookId){
        if(qnt !=1)
        this.getCartDetails[i].qnt = parseInt(qnt) - 1
      }
    }

    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  total: number = 0;
  loadCart(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');
      this.total = this.getCartDetails.reduce(function(acc:any, val:any){
        return acc + (val.amt * val.qnt)
      }, 0)
    }
  }

  

  removeAll(){
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.total = 0;
    this.cartNumber = 0;
    this.bkService.cartSubject.next(this.cartNumber);
  }

  removeItem(book:any){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');
      for(let i = 0; i < this.getCartDetails.length; i++){
        if(this.getCartDetails[i].bookId === book){
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
          this.loadCart();
          this.cartNumberFuncs();
        }
      }
    }
  }

  cartNumber: number = 0;
  cartNumberFuncs(){
    let cartValue = JSON.parse(localStorage.getItem('localCart') || '{}');
    this.cartNumber = cartValue.length;
    this.bkService.cartSubject.next(this.cartNumber);
  }

}
