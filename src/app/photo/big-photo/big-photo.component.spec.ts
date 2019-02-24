import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPhotoComponent } from './big-photo.component';

describe('BigPhotoComponent', () => {
  let component: BigPhotoComponent;
  let fixture: ComponentFixture<BigPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
