import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverPageComponent } from './rover-page.component';

describe('RoverPageComponent', () => {
  let component: RoverPageComponent;
  let fixture: ComponentFixture<RoverPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
