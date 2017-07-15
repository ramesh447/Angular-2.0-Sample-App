import { Component } from '@angular/core';
@Component ({
selector : 'sdp-app',
template:`
         <h1>{{pageTitle}}</h1>
         <sdp-products></sdp-products>
         `
})
export class AppComponent {
    pageTitle:string = "Shop Disney Parks";
}
