import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByRatingsIncComponent } from './filter-by-ratings-inc.component';

describe('FilterByRatingsIncComponent', () => {
  let component: FilterByRatingsIncComponent;
  let fixture: ComponentFixture<FilterByRatingsIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByRatingsIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByRatingsIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
