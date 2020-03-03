import { Component, OnInit } from '@angular/core';
import { faFacebookF,faTwitter,faPinterestP} from '@fortawesome/free-brands-svg-icons';
import{faMapMarkerAlt, faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {

  fb = faFacebookF;
  tw= faTwitter;
  faPhone=faPhone;
  faMapMarkerAlt=faMapMarkerAlt;
  faPinterestP=faPinterestP;
  faEnvelope=faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
