import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAndDescriptionComponent } from './data-and-description.component';

describe('DataAndDescriptionComponent', () => {
  let component: DataAndDescriptionComponent;
  let fixture: ComponentFixture<DataAndDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAndDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAndDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
