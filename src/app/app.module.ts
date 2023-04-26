import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { HttpInterceptorClass } from './models/util/Interceptor/http.Interceptor.cl';
import { httpInterceptorFn } from './models/util/Interceptor/http.Interceptor.fn';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorClass, multi: true },
    provideHttpClient(withInterceptors([httpInterceptorFn])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
