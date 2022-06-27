import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';
import { Product } from 'src/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  title : string ="Product Details";
  isChangeParrent : boolean = true;
  products : Product[] = products;//products is property, Product is Interface, products is a JSON data file
  constructor() { }

  ngOnInit(): void {
  }
//Concept-3d
  onClick(productData : Product)
  {
    alert(productData.name+" subject is available. (From Child Event)")
  }
  onClickTestParent(testChildData: string)
  {
    alert(testChildData + " data received from Child to Parent.");
  }
  toggleButton()
  {
    this.isChangeParrent = !this.isChangeParrent;
  }
}
