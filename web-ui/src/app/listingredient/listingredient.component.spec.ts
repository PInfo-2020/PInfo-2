import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingredientComponent } from './listingredient.component';

describe('ListingredientComponent', () => {
  let component: ListingredientComponent;
  let fixture: ComponentFixture<ListingredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
