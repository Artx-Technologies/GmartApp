import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss']
})
export class ProductsComponentComponent implements OnInit {
  rightArrowFilled =faCaretRight;
  whichoneisClicked;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.whichoneisClicked = 'veg';
  }

    gotocart(pagename: string){
    this.router.navigate(['CartComponent']);

  }

}
