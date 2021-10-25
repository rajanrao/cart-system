import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-update-cart',
  templateUrl: './update-cart.component.html',
  styleUrls: ['./update-cart.component.css']
})
export class UpdateCartComponent implements OnInit {
  object:Cart=new Cart()
  id!: number;
  constructor(private route:ActivatedRoute,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
  }
  onSubmit(){
    this.cart.updateCart(this.id,this.object).subscribe(data=>{
      this.goToEmployeeList();
    },
    error => console.log(error));

  }

  goToEmployeeList(){
    this.router.navigate(['/carts']);
  }
}
