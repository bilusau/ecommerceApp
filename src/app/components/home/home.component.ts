import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/Interface/products.interface';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  add : number = -1;

  Products : Array<any> = [
    // {Name:'Banana', Price : 5, Desc : 'Fruit', ProductPath : 'assets/pics/banana.jpg'},
    // {Name:'Kiwi', Price : 5, Desc : 'Fruit', ProductPath : 'assets/pics/kiwi.jpg'},
    // {Name:'Orange', Price : 5, Desc : 'Fruit', ProductPath : 'assets/pics/orange.jpg'},
    // {Name:'Strawberry', Price : 5, Desc : 'Fruit', ProductPath : 'assets/pics/strawberry.jpg'},
  ];

  constructor(private ps : ProductsService, private cart : CartService, private as : AuthService, private rout : Router ) { }

  ngOnInit() {
    this.ps.getAllProducts().subscribe(
      data => this.Products = data
    )
  }

  addToCart(index)
  {
    this.add = +index;
    //console.log('added', this.Products[index])

    if(this.as.userId)
      this.add = +index
    else
    this.rout.navigate(['/login'])
  }

  buy(amount)
  {
    let selectedProduct = this.Products[this.add]
    let data = {
      name : selectedProduct.Name,
      price : selectedProduct.Price,
      amount : +amount
    }

    //console.log(data);

    this.cart.addToCart(data)
    .then( () =>  this.add = -1)
    .catch( err => console.log(err))
  }

}
