import { Component } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Router } from '@angular/router';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "GmartApp";
  faCoffee = faCoffee;
  fb = faFacebookF;

  constructor(private router: Router) { }
  onInit(){
    console.log(this.router.url);
  }
}
