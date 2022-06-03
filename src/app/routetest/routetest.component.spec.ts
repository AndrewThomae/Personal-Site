import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutetestComponent } from './routetest.component';

describe('RoutetestComponent', () => {
  let component: RoutetestComponent;
  let fixture: ComponentFixture<RoutetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
