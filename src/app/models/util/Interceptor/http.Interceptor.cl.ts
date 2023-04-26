import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorClass implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const cloned = req.clone({
      url: 'http://localhost/apache/PHP-Api-Restful/lib/get/get.php',
    });
    return next.handle(cloned).pipe(
      catchError((error) => {
        if (error.status === 404) {
          return throwError(() => error);
        } else {
          return of();
        }
      })
    );
  }
}
