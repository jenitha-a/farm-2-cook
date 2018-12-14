import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: IProducts[];
  upproducts: IProducts[] = [];
  selectedProduct : Subject<any> = new Subject;
  total:number = 0;
  delit:number = 0;

  constructor() { 
    this.products = [
      {
        product_id : "pd100",
        product_img : "assets/images/m3.jpg",
        product_name : "Mutton curry cut",
        product_price : 300,
        product_details : "Fresh Goat cut",
        product_quality : 1
      },
      {
        product_id : "pd101",
        product_img : "assets/images/w1.jpg",
        product_name : "Whole Chicken",
        product_price : 850,
        product_details : "Fresh chicken skinless",
        product_quality : 1
      },
      {
        product_id : "pd102",
        product_img : "assets/images/s7.jpg",
        product_name : "Egg",
        product_price : 120,
        product_details : "Brown egg",
        product_quality : 1
      },
      {
        product_id : "pd103",
        product_img : "assets/images/p21.jpg",
        product_name : "Mutton Mince",
        product_price : 430,
        product_details : "Fresh Lamb mince",
        product_quality : 1
      }
    ];
   }

  ngOnInit() {
    this.totalPrice();
  }

  getpopup(det) {
    this.selectedProduct.next(det);
  }

  delpopup(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products.splice(i,1);
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }


  totalPrice(){
    this.total = 0;
    for(var i=0;i<this.products.length;i++){
      this.total += (this.products[i].product_price * this.products[i].product_quality);
    }
  }

  add(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quality += 1;
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }

  del(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quality -= 1;
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }

}
