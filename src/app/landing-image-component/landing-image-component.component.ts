import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-image-component',
  templateUrl: './landing-image-component.component.html',
  styleUrls: ['./landing-image-component.component.scss']
})

export class LandingImageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }
  stopDefaults($event){
    $event.preventDefault();
    $event.stopPropagation();
  }

}
