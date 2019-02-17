import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSearchFormComponent } from './photo-search-form.component';

describe('PhotoSearchFormComponent', () => {
  let component: PhotoSearchFormComponent;
  let fixture: ComponentFixture<PhotoSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
