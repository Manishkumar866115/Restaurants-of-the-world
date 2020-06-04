import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByRatingsDscComponent } from './filter-by-ratings-dsc.component';

describe('FilterByRatingsDscComponent', () => {
  let component: FilterByRatingsDscComponent;
  let fixture: ComponentFixture<FilterByRatingsDscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByRatingsDscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByRatingsDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
