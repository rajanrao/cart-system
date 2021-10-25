import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cart} from "../cart"
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  carts: Cart[] | undefined

  constructor(private cartService:CartService,private router:Router) { }


  ngOnInit(): void {
    

  this.getCart()
      
  }
   private getCart(){
     this.cartService.getCartList().subscribe(data=>{
       this.carts=data
     })

   }
   updateCart(id:number|undefined){
    this.router.navigate(['update-cart', id]);

   }
   deleteCart(id:number){
    this.cartService.deleteCart(id).subscribe(data=>{
      this.getCart()
    })

   }

}
