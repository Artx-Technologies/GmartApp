import { Component, OnInit,Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponentComponent } from '../header-component/header-component.component';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss']
})
export class ProductsComponentComponent implements OnInit {
  constructor(private router: Router,private renderer: Renderer2,private elementRef:ElementRef) { }
 // @ViewChild("addHr", {static: false}) private addHrvar: ElementRef;
 @ViewChild(HeaderComponentComponent,{static: true}) private haderelement: HeaderComponentComponent;
  ngOnInit(): void {
    if(this.router.url === "/products"){
      console.log("YEss");
      //this.renderer.appendChild(this.d1.nativeElement,hr);
      console.log(this.haderelement);
    }
  }

}
