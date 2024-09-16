import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OTPService {
  private apiUrl = 'https://localhost:5001/otp';

  constructor(private http: HttpClient) { }

  generateOTP(userId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/generation?userId=${userId}`, {});
  }

  validateOTP(userId: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/validation?userId=${userId}&password=${password}`, {});
  }
}
