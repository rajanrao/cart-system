import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.component.html',
  styleUrls: ['./create-cart.component.css']
})
export class CreateCartComponent implements OnInit {
  object:Cart=new Cart()

  constructor(private cartService:CartService ,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveCart(){
    this.cartService.createCart(this.object).subscribe( data =>{
      
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/carts']);
  }
  
  onSubmit(){
    
    this.saveCart();
  }

}
