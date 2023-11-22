import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeinfoComponent } from './purposeinfo.component';

describe('PurposeinfoComponent', () => {
  let component: PurposeinfoComponent;
  let fixture: ComponentFixture<PurposeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurposeinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurposeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
