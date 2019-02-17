import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverItemComponent } from './rover-item.component';

describe('RoverItemComponent', () => {
  let component: RoverItemComponent;
  let fixture: ComponentFixture<RoverItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
