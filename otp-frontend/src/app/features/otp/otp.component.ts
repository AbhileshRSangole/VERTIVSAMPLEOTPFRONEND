import { Component } from '@angular/core';
import { OTPService } from '../../core/services/otp.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent {
  userId = '';
  password = '';
  generatedPassword = '';
  remainingTime = 0;
  isValid = false;

  constructor(private otpService: OTPService) { }

  generateOTP() {
    this.otpService.generateOTP(this.userId).subscribe(response => {
      this.generatedPassword = response.password;
      this.remainingTime = response.expiresIn;
      setTimeout(() => this.remainingTime = 0, this.remainingTime * 1000);
    });
  }

  validateOTP() {
    this.otpService.validateOTP(this.userId, this.password).subscribe(response => {
      this.isValid = response.isValid;
    });
  }
}
