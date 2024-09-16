import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OTPComponent } from './features/otp/otp.component';
import { OTPService } from './core/services/otp.service';

@NgModule({
  declarations: [
    AppComponent,
    OTPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [OTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
