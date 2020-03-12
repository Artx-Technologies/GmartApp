import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-contactus-component",
  templateUrl: "./contactus-component.component.html",
  styleUrls: ["./contactus-component.component.scss"]
})
export class ContactusComponent implements OnInit {
  formGroup: FormGroup;
  ex = [];
  titleAlert: string = "This Filed Is Reqired";
  lat: number = 43.65283632129762;
  lng: number = -79.38258099690641;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      Validate: ""
    });
  }
  get name() {
    return this.formGroup.get("name") as FormControl;
  }
  getErrorEmail() {}

  onSubmit() {
    console.log(this.formGroup.value);
    this.ex.push(this.formGroup.value);
  }

  getLocation(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}
