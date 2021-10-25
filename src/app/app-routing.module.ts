import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';

const routes: Routes = [
  {path:'carts' ,component: CartListComponent},
  {path:'create-cart' ,component: CreateCartComponent},
  {path:'' ,component: CartListComponent},
  {path:'update-cart/:id',component:UpdateCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
