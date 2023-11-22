import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchallanComponent } from './echallan.component';

describe('EchallanComponent', () => {
  let component: EchallanComponent;
  let fixture: ComponentFixture<EchallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
