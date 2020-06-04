import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByVotesDscComponent } from './filter-by-votes-dsc.component';

describe('FilterByVotesDscComponent', () => {
  let component: FilterByVotesDscComponent;
  let fixture: ComponentFixture<FilterByVotesDscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByVotesDscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByVotesDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
