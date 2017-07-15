import { Component } from '@angular/core';
@Component({
  selector: 'sdp-products',
  templateUrl:'app/products/product-list.component.html'
})
export class ProductListComponent {
   pageTitle: string = "Disney Product List";
   imageWidth:number = 100;
   imageMargin:number = 2;
   showImage:boolean = false;
   listFilter:string = 'cart';
   products:any[]= [
     {
         "productId": 1,
         "productName": "Leaf Rake",
         "productCode": "GDN-0011",
         "releaseDate": "March 19, 2016",
         "description": "Leaf rake with 48-inch wooden handle.",
         "price": 19.95,
         "starRating": 3.2,
         "imageUrl": "http://www.diszine.com/wp-content/uploads/2010/06/Dismerch-300x225.jpg"
     },
     {
         "productId": 2,
         "productName": "Garden Cart",
         "productCode": "GDN-0023",
         "releaseDate": "March 18, 2016",
         "description": "15 gallon capacity rolling garden cart",
         "price": 32.99,
         "starRating": 4.2,
         "imageUrl": "http://www.disneygeekery.com/wp-content/uploads/2015/06/VANS-X-DISNEY_ADULT_FOOTWEAR_PACK_banner-560x280.jpg"
     }
   ];
 toggleImage ():void {
   this.showImage = !this.showImage;
 };
}
