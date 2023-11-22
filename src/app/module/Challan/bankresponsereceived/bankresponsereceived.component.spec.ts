import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankresponsereceivedComponent } from './bankresponsereceived.component';

describe('BankresponsereceivedComponent', () => {
  let component: BankresponsereceivedComponent;
  let fixture: ComponentFixture<BankresponsereceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankresponsereceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankresponsereceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
