import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverListComponent } from './rover-list.component';

describe('RoverListComponent', () => {
  let component: RoverListComponent;
  let fixture: ComponentFixture<RoverListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
