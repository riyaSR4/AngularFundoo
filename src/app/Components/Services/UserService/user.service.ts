import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
  loginService(reqData: any) {
    console.log("Data in user service", reqData);

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    }
    return this.httpService.PostService('User/Login', reqData, false, httpAuthOptions)
  }
  ForgetPasswordService(reqData: any) {
    console.log("Data in user service", reqData);

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    }
    return this.httpService.PostService('User/ForgetPassword?email=' + reqData.email,{}, false, httpAuthOptions)
  }
  RegisterService(reqData: any) {
    console.log("Data in user service", reqData);

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    }
    return this.httpService.PostService('User/Register', reqData, false, httpAuthOptions)
  }
  ResetPasswordService(reqData: any, auth: any) {
    console.log("Data in user service", reqData);

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+auth
      })
    }
    return this.httpService.PutService('User/ResetPassword',reqData, true, httpAuthOptions)
  }
}
