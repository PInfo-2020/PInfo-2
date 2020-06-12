import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilerecipeComponent } from './tilerecipe.component';

describe('TilerecipeComponent', () => {
  let component: TilerecipeComponent;
  let fixture: ComponentFixture<TilerecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilerecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilerecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
