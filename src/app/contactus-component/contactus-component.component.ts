import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-contactus-component",
  templateUrl: "./contactus-component.component.html",
  styleUrls: ["./contactus-component.component.scss"]
})
export class ContactusComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = "This Filed Is Reqired";
  lat: number = 43.65283632129762;
  lng: number = -79.38258099690641;

  constructor() {}

  ngOnInit() {}

  getErrorEmail() {}

  getLocation(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}
