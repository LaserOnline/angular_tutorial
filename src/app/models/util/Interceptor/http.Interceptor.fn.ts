import { HttpInterceptorFn } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const httpInterceptorFn: HttpInterceptorFn = (request, next) => {
  const router = Inject(Router);
  const cloned = request.clone({
    url: 'https://www.anapioficeandfire.com/api/books',
  });
  return next(cloned).pipe(
    catchError((error) => {
      if (
        error.status === 401 ||
        error.status === 403 ||
        error.status === 404 ||
        error.status === 500
      ) {
        router.navigate(['service1']);
      }
      return throwError(() => error);
    })
  );
};
