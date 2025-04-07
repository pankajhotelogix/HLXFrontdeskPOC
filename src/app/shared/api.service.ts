import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private getHeaders(headers?: HttpHeaders): HttpHeaders {
    const token = localStorage.getItem('token');
    const token_fingerprint= localStorage.getItem('token_fingerprint');
    headers = headers || new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
      headers = headers.set('X-Token-Fingerprint', `${token_fingerprint}`);
    } else {
      console.warn('Authorization token is missing.');
    }
    return headers;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const errorMessage = error.error instanceof Error 
      ? error.error.message 
      : error.error.msg || error.error.message || 'Unknown error occurred';
    return throwError(() => errorMessage);
  }

  post<T>(apiEndUrl: string, params?: any, headers?: HttpHeaders): Observable<T> {
    const processedParams = params && typeof params !== 'string' ? JSON.stringify(params) : params;
    return this.http.post<T>(
      apiEndUrl, 
      processedParams, 
      { headers: this.getHeaders(headers) }
    );
  // ).pipe(catchError(this.handleError));
  }

  get<T>(apiEndUrl: string, params?: Record<string, any>, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(
      apiEndUrl, 
      { 
        headers: this.getHeaders(headers),
        params: params as HttpParams
      }
    ).pipe(catchError(this.handleError));
  }

  getWithParams<T>(
    apiEndUrl: string,
    params: Record<string, string | number | boolean> = {},
    headers?: HttpHeaders
  ): Observable<T> {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      httpParams = httpParams.append(key, String(value));
    });

    return this.http.get<T>(
      apiEndUrl, 
      { 
        headers: this.getHeaders(headers),
        params: httpParams 
      }
    ).pipe(catchError(this.handleError));
  }
}
