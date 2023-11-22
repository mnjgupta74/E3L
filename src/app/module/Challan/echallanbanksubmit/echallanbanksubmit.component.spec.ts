import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchallanbanksubmitComponent } from './echallanbanksubmit.component';

describe('EchallanbanksubmitComponent', () => {
  let component: EchallanbanksubmitComponent;
  let fixture: ComponentFixture<EchallanbanksubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchallanbanksubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchallanbanksubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
