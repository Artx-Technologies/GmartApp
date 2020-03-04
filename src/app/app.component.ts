import { Component } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "GmartApp";
  faCoffee = faCoffee;
  fb = faFacebookF;
}
