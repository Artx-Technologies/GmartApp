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
  post: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    let emailregex: RegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    this.formGroup = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.pattern(emailregex)]],
      mobileNumber: [
        "",
        [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]
      ],
      enq: ["", [Validators.required]],

      Validate: ""
    });
  }
  get name() {
    return this.formGroup.get("name") as FormControl;
  }
  get mobileNumber() {
    return this.formGroup.get("phone") as FormControl;
  }
  get enq() {
    return this.formGroup.get("enq") as FormControl;
  }
  getErrorEmail() {
    this.formGroup.get("email").hasError("pattern") ? "Not a valid email" : "";
  }

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
