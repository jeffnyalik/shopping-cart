import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { json } from 'body-parser';

import { CartBookService } from '../../services/cart-book.service';


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  faPlus = faPlus
  itemsCart:any = [];
  constructor(private bkService: CartBookService) { }

  ngOnInit(): void {
    console.log(this.bookArray);
  }

  bookArray = [
    {
      bookId: 1,
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457',
      amt: 400,
      qnt: 1
    },
    {
      bookId: 2,
      img: 'https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg',
      amt: 550,
      qnt: 1
    },
    {
      bookId: 3,
      img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
      amt: 126,
      qnt: 1
    },
    {
      bookId: 4,
      img: 'https://i.pinimg.com/736x/3a/88/69/3a88698b2e34f85ed788ee03ce256c38--book-cover-design-book-design.jpg',
      amt: 900,
      qnt: 1
    },
  ];

  inc(book:any){
    if(book.qnt != 5){
      book.qnt +=1;
    }
    else{
      alert("Can not exceed 5 quantities per product");
      console.log("Can not be more than 5 quantities")
    }
  }

  dec(book:any){
    if(book.qnt != 1){
      book.qnt -=1;
    }
    else{
      alert('Quantity can not be zero');
      console.log('Quantity can not be zero');
    }
  }

  addToCart(book:any){
    let cartData = localStorage.getItem('localCart');
    if(cartData == null){
      let storeData:any = [];
      storeData.push(book);
      localStorage.setItem('localCart', JSON.stringify(storeData));
    }else{
      var id = book.bookId;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '');
      for(let i = 0; i <this.itemsCart.length; i++){
        if(parseInt(id) === parseInt(this.itemsCart[i].bookId)){
          this.itemsCart[i].qnt = book.qnt;
          index = i;
          break;
        }
      }

      if(index == -1){
        this.itemsCart.push(book);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
      }
      else{
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
      }
    }
    
    this.cartNumberFuncs();
  }

  cartNumber: number = 0;
  cartNumberFuncs(){
    let cartValue = JSON.parse(localStorage.getItem('localCart') || '{}');
    this.cartNumber = cartValue.length;
    this.bkService.cartSubject.next(this.cartNumber);
  }

}
