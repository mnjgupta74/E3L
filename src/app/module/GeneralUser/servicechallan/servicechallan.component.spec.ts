import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicechallanComponent } from './servicechallan.component';

describe('ServicechallanComponent', () => {
  let component: ServicechallanComponent;
  let fixture: ComponentFixture<ServicechallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicechallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicechallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
