import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './books/cart/cart.component';
import { ListBooksComponent } from './books/list-books/list-books.component';

const routes: Routes = [
  {path: '', component: ListBooksComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
