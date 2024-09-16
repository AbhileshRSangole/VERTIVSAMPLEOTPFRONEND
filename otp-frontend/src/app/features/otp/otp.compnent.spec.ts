import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OTPComponent } from './otp.component';
import { OTPService } from '../../core/services/otp.service';
import { of } from 'rxjs';

describe('OTPComponent', () => {
  let component: OTPComponent;
  let fixture: ComponentFixture<OTPComponent>;
  let otpService: OTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OTPComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [OTPService]
    });
    fixture = TestBed.createComponent(OTPComponent);
    component = fixture.componentInstance;
    otpService = TestBed.inject(OTPService);
    fixture.detectChanges();
  });

  it('should generate OTP', () => {
    spyOn(otpService, 'generateOTP').and.returnValue(of({ password: '1234', expiresIn: 60 }));
    component.userId = 'dummy value';
    component.generateOTP();
    expect(component.generatedPassword).toBe('1234');
    expect(component.remainingTime).toBe(60);
  });

  it('should validate OTP', () => {
    spyOn(otpService, 'validateOTP').and.returnValue(of({ isValid: true }));
    component.userId = 'dummy value';
    component.password = '1234';
    component.validateOTP();
    expect(component.isValid).toBe(true);
  });
});
