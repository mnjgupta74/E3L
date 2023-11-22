import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitterinfoComponent } from './remitterinfo.component';

describe('RemitterinfoComponent', () => {
  let component: RemitterinfoComponent;
  let fixture: ComponentFixture<RemitterinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitterinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemitterinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
