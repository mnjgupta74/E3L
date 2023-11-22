import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewchallanComponent } from './createnewchallan.component';

describe('CreatenewchallanComponent', () => {
  let component: CreatenewchallanComponent;
  let fixture: ComponentFixture<CreatenewchallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenewchallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenewchallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
