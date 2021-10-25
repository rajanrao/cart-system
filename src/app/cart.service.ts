import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import {Cart} from './cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private baseurl ="http://localhost:8080/api/v1/carts";
 //private baseurl="https://4b310be1-43dd-4799-a750-b33d2724e8bb.mock.pstmn.io/localhost:8080/api/v1/carts"
  constructor(private httpClient:HttpClient) {}
    
    getCartList():Observable<Cart[]>{
      return this.httpClient.get<Cart[]>(`${this.baseurl}`);

    }

    createCart(cart: Cart): Observable<Object>{
      return this.httpClient.post(`${this.baseurl}`,cart);
    }
  
    // getCartById(id: number): Observable<Cart>{
    //   return this.httpClient.get<Cart>(`${this.baseurl}/${id}`);
    // }
  
     updateCart(id: number, cart: Cart): Observable<Object>{
       return this.httpClient.put(`${this.baseurl}/${id}`, cart);
     }
  
     deleteCart(id: number): Observable<Object>{
       return this.httpClient.delete(`${this.baseurl}/${id}`)};

   
}
/*
[{
    "id":1,
    "itemName":"rtar",
    "itemPrice":"vd",
    "itemDetails":"ds"
}]
*/