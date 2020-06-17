import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrecipeComponent } from './listrecipe.component';

describe('ListrecipeComponent', () => {
  let component: ListrecipeComponent;
  let fixture: ComponentFixture<ListrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
