import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  Constant from './shared/constant';
import { ApiService } from './shared/api.service';

interface LoginParams{
  username:string,
  password:string,
  hotelid: number
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}

  login(param: LoginParams): Observable<any> {
    const body = {
      username: param.username,
      password: param.password,
      hotelid: param.hotelid,
    };
    return this.api.post(Constant.authBaseUrl + 'login', body);
  }
}
