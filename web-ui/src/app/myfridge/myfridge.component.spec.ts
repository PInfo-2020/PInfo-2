import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfridgeComponent } from './myfridge.component';

describe('MyfridgeComponent', () => {
  let component: MyfridgeComponent;
  let fixture: ComponentFixture<MyfridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
