import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-contactus-component",
  templateUrl: "./contactus-component.component.html",
  styleUrls: ["./contactus-component.component.scss"]
})
export class ContactusComponentComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = "This Filed Is Reqired";

  constructor() {}

  ngOnInit() {}

  getErrorEmail() {}
}
