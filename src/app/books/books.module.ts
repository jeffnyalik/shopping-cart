import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AddBooksComponent } from './add-books/add-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';
import { ListBooksComponent } from './list-books/list-books.component';



@NgModule({
  declarations: [
    ListBooksComponent,
    AddBooksComponent,
    BookDetailsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],

  exports: [
    ListBooksComponent,
    AddBooksComponent,
    BookDetailsComponent,
    CartComponent
  ]
})
export class BooksModule { }
