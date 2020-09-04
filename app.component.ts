import { Component } from "@angular/core";

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  //template:`<h1>this is app comp<h1>`,
  styleUrls:['app.component.css']

})

export class AppComponent{
  msg:string;
  isHide:boolean;
  cssClass:string;

  constructor(){
    this.msg='this is string';
    this.isHide = true;
    this.cssClass = 'green';
  }

  takeInput(event):void{
    this.msg = event.target.value;
  }

  showHide():void{
    this.isHide = !this.isHide;
  }


}