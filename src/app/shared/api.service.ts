import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  // post(apiEndUrl: string, params?: any, header?: HttpHeaders) {
  //   if (params && typeof params !== 'string') {
  //     params = JSON.stringify(params);
  //   }
  //   const headers = header || new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  //   return this.http
  //     .post<any>(apiEndUrl, params, { headers })
  //     .pipe(catchError(this.handelError));
  // }
  post(apiEndUrl: string, params?: any, header?: HttpHeaders) {
    if (params && typeof params !== 'string') {
      params = JSON.stringify(params);
    }
    const token = localStorage.getItem('token');
    let headers = header || new HttpHeaders({
      'Content-Type': 'application/json',
    });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    } else {
      console.warn('Authorization token is missing.');
    }
    return this.http.post<any>(apiEndUrl, params, { headers }).pipe(
      catchError(this.handelError)
    );
  }
  
  get(apiEndUrl: string, body: any, headers?: HttpHeaders): Observable<any> {
    const token = localStorage.getItem('token'); 
    if (token) {
      headers = headers || new HttpHeaders();
      headers = headers.set('Authorization', `Bearer ${token}`);
    } else {
      console.warn('No token found in localStorage');
    }
    const options = {
      headers: headers,
      params: body
    };
    return this.http
      .get<any>(apiEndUrl, options)
      .pipe(catchError(this.handelError));
  }
  getWithParams<T>(
    apiEndUrl: string,
    params: Record<string, string | number | boolean> = {},
    headers?: HttpHeaders
  ): Observable<T> {
    const token = localStorage.getItem('token');
    headers = headers || new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    } else {
      console.warn('Authorization token is missing.');
    }
    headers = headers.set('Content-Type', 'application/json');
    let httpParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key] as string);
      }
    }
    return this.http.get<T>(apiEndUrl, { headers, params: httpParams }).pipe(
      catchError(this.handelError)
    );
  }
  handelError(error: HttpErrorResponse | any) {
    let errorMessage: string = "";
    if (error.error instanceof Error) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error.msg || error.error.message;
    }

    return throwError(() => errorMessage);
  }
}
