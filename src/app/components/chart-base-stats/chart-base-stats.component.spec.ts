import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBaseStatsComponent } from './chart-base-stats.component';

describe('ChartBaseStatsComponent', () => {
  let component: ChartBaseStatsComponent;
  let fixture: ComponentFixture<ChartBaseStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBaseStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBaseStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
