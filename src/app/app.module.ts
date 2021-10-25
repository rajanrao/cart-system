import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { FormsModule } from '@angular/forms';
import { UpdateCartComponent } from './update-cart/update-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    CreateCartComponent,
    UpdateCartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
