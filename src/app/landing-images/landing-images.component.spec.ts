import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingImagesComponent } from './landing-images.component';

describe('LandingImagesComponent', () => {
  let component: LandingImagesComponent;
  let fixture: ComponentFixture<LandingImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
