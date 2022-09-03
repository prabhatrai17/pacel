import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentVerifyComponent } from './payment-verify.component';

describe('PaymentVerifyComponent', () => {
  let component: PaymentVerifyComponent;
  let fixture: ComponentFixture<PaymentVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
