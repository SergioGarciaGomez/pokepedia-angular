import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesAndWeaknessesComponent } from './types-and-weaknesses.component';

describe('TypesAndWeaknessesComponent', () => {
  let component: TypesAndWeaknessesComponent;
  let fixture: ComponentFixture<TypesAndWeaknessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesAndWeaknessesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesAndWeaknessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
