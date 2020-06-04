import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByCostDscComponent } from './filter-by-cost-dsc.component';

describe('FilterByCostDscComponent', () => {
  let component: FilterByCostDscComponent;
  let fixture: ComponentFixture<FilterByCostDscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByCostDscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByCostDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
