import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OTPService } from './otp.service';

describe('OTPService', () => {
  let service: OTPService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OTPService]
    });
    service = TestBed.inject(OTPService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should generate OTP', () => {
    const dummyResponse = { password: '1234', expiresIn: 60 };
    service.generateOTP('dummy value').subscribe(response => {
      expect(response.password).toBe('1234');
      expect(response.expiresIn).toBe(60);
    });
    const req = httpMock.expectOne('https://localhost:5001/otp/generation?userId=dummy value');
    expect(req.request.method).toBe('POST');
    req.flush(dummyResponse);
  });

  it('should validate OTP', () => {
    const dummyResponse = { isValid: true };
    service.validateOTP('dummy value', '1234').subscribe(response => {
      expect(response.isValid).toBe(true);
    });
    const req = httpMock.expectOne('https://localhost:5001/otp/validation?userId=dummy value&password=1234');
    expect(req.request.method).toBe('POST');
    req.flush(dummyResponse);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
