import { Component, OnInit, Input, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-contactus-component',
  templateUrl: './contactus-component.component.html',
  styleUrls: ['./contactus-component.component.scss']
})
export class ContactusComponentComponent implements OnInit {
  currentPath: BehaviorSubject<String>;
  HomeClassH = false;
  ProductClassH = false;
  ContactClassH = true;
  constructor() {
    this.currentPath = new BehaviorSubject("Contact");
   }

  ngOnInit(): void {
  }

}
