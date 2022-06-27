import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Product';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {
  @Input() productData! : Product;
  @Input() isChangedChild! : boolean;
  @Output() notify = new EventEmitter<Product>();
  @Output() testNotify = new EventEmitter<string>(); 
  constructor() {  }

  ngOnInit(): void {
    
  }
  onClick()
  {
    alert(this.productData.name+" subject is available.")
  }
  //Concept-3b
  onClickFromChild()
  {
    this.notify.emit(this.productData);
  }
  onClickTestChild()
  {
    this.testNotify.emit("Jyoti");
  }

}
