import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasehttpComponent } from './databasehttp.component';

describe('DatabasehttpComponent', () => {
  let component: DatabasehttpComponent;
  let fixture: ComponentFixture<DatabasehttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabasehttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasehttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
