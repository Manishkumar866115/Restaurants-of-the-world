import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByVotesIncComponent } from './filter-by-votes-inc.component';

describe('FilterByVotesIncComponent', () => {
  let component: FilterByVotesIncComponent;
  let fixture: ComponentFixture<FilterByVotesIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByVotesIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByVotesIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
