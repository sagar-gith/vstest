import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDetailesComponent } from './staff-detailes.component';

describe('StaffDetailesComponent', () => {
  let component: StaffDetailesComponent;
  let fixture: ComponentFixture<StaffDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
