import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantExtensionComponent } from './restaurant-extension.component';

describe('RestaurantExtensionComponent', () => {
  let component: RestaurantExtensionComponent;
  let fixture: ComponentFixture<RestaurantExtensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantExtensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
