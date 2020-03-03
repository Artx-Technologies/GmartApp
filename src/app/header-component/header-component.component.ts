import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

let obj = {
  text1: "value1",
  text2: "value2",
  text3: "value3",
  text4: "value4",
}
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  email= new FormControl('', [Validators.required
  ,Validators.email]);


}
