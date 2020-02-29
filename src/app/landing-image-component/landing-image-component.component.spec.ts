import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingImageComponentComponent } from './landing-image-component.component';

describe('LandingImageComponentComponent', () => {
  let component: LandingImageComponentComponent;
  let fixture: ComponentFixture<LandingImageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingImageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
