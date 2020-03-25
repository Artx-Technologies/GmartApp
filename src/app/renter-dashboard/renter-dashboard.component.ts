import { Component, OnInit } from '@angular/core';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-renter-dashboard',
  templateUrl: './renter-dashboard.component.html',
  styleUrls: ['./renter-dashboard.component.scss']
})
export class RenterDashboardComponent implements OnInit {
  rightArrowFilled =faCaretRight;
  constructor() { }
  whichoneclicked:String = "Dashboard";
  ngOnInit() {
  }

}
