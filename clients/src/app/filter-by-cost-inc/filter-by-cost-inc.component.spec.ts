import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByCostIncComponent } from './filter-by-cost-inc.component';

describe('FilterByCostIncComponent', () => {
  let component: FilterByCostIncComponent;
  let fixture: ComponentFixture<FilterByCostIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByCostIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByCostIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
