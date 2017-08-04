import { Component, OnInit } from '@angular/core';
import  { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
  moduleId:module.id,
  templateUrl:'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
   pageTitle: string = "Disney Product List";
   imageWidth:number = 100;
   imageMargin:number = 2;
   showImage:boolean = false;
   listFilter:string;
   errorMessage:string;
   products:IProduct[];

   constructor (private _productService:ProductService) {
   };
 toggleImage ():void {
   this.showImage = !this.showImage;
 };

 ngOnInit():void {
   this._productService.getProducts()
   .subscribe(ram => this.products= ram,
   error => this.errorMessage = <any>error );
 };

 onRatingClicked(message:string):void{
   this.pageTitle= 'Product List:'+ message;
 };
}
