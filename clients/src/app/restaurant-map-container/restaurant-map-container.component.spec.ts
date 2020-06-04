import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMapContainerComponent } from './restaurant-map-container.component';

describe('RestaurantMapContainerComponent', () => {
  let component: RestaurantMapContainerComponent;
  let fixture: ComponentFixture<RestaurantMapContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMapContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
