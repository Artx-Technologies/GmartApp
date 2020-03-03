import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  faCoffee = faCoffee;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
goProducts(){
  this.router.navigate(['/products']);
}
}
