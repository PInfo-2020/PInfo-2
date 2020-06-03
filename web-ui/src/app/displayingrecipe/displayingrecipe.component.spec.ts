import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingrecipeComponent } from './displayingrecipe.component';

describe('DisplayingrecipeComponent', () => {
  let component: DisplayingrecipeComponent;
  let fixture: ComponentFixture<DisplayingrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayingrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayingrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
