import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionComponentComponent } from './content-section-component.component';

describe('ContentSectionComponentComponent', () => {
  let component: ContentSectionComponentComponent;
  let fixture: ComponentFixture<ContentSectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSectionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
