import { Component, OnInit } from "@angular/core";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGoodreadsG } from "@fortawesome/free-brands-svg-icons";
import { Router } from "@angular/router";

let obj = {
  text1: "value1",
  text2: "value2",
  text3: "value3",
  text4: "value4"
};
@Component({
  selector: "app-header-component",
  templateUrl: "./header-component.component.html",
  styleUrls: ["./header-component.component.scss"]
})
export class HeaderComponentComponent implements OnInit {
  faCoffee = faCoffee;
  currentPath: string;
  faBars = faBars;
  faIc = faGoodreadsG;
  HomeClassH: boolean = false;
  ProductClassH: boolean = false;
  ContactClassH: boolean = false;
  constructor(private router: Router) {}
  ngOnInit() {}

  goHome() {
    this.router.navigate(["/home"]);
    this.HomeClassH = true;
    this.ProductClassH = false;
    this.ContactClassH = false;
    // console.log(hero);
  }

  goProducts() {
    this.router.navigate(["/products"]);
    this.HomeClassH = false;
    this.ProductClassH = true;
    this.ContactClassH = false;
  }
  goContacts() {
    this.router.navigate(["/contactus"]);
    this.HomeClassH = false;
    this.ProductClassH = false;
    this.ContactClassH = true;
  }
}
