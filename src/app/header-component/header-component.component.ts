import { Component, OnInit } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
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
  constructor(private router: Router) {}
  ngOnInit() {}

  goHome(){
    this.router.navigate(["/home"]);
  }

  goProducts() {
    this.router.navigate(["/products"]);
  }
  goContacts() {
    this.router.navigate(["/contactus"]);
  }
}
