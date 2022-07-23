import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data/products';
import { Product } from 'src/Product';
//import { isUndefined } from 'util';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
  product : any;
  checkDesc: string = " ";
  disabledButton = false;
  txtAddToCart: string = "Add to Cart";
  isSubmitted: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //code to retrieve product
//ActivatedRoute
//service can be injected into component class by calling its object 
//in constructor  - (Dependency Injection)
    const routeParams =this.route.snapshot.paramMap;
    const id = Number(routeParams.get("productId"));
    //this.id1=Number(routeParams.get("productId"));

    this.product = products.find(product => product.id ==id);
    console.log(products.find(product => product.id ==id));
    this.checkDesc = products.find(product => product.id ==id)?.description ?? "test" ;
  }
  addToCart()
  {
    this.disabledButton = true;
    this.txtAddToCart = "Added to Cart";
    this.isSubmitted = true;
  }
}

