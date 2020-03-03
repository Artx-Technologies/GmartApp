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

  getErrorPassword() {
    return this.formGroup.get("password").hasError("required")
      ? "Field is required (at least eight characters, one uppercase letter and one number)"
      : this.formGroup.get("password").hasError("requirements")
      ? "Password needs to be at least eight characters, one uppercase letter and one number"
      : "";
  }
  goProducts() {
    this.router.navigate(["/products"]);
  }
}
