import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// interface Login{
//   email:string,
//   password:string
// }

@Injectable({
  providedIn: 'root'
})
export class HttpService {
BaseURL ="https://localhost:5001/api/"
  constructor(private httpClient:HttpClient) { }
 
  PostService(url:string,reqBody: any,token:boolean,httpAuthOptions:any){
    console.log("data in http service",reqBody)
    return this.httpClient.post(this.BaseURL+url, reqBody,token && httpAuthOptions)
  }
 
  PutService(url:string,reqBody: any,token:boolean,httpAuthOptions:any){
    console.log("data in http service",reqBody)
    return this.httpClient.put(this.BaseURL+url, reqBody,token && httpAuthOptions)
  }

  GetService(url:string,token:boolean,httpAuthOptions:any){
    return this.httpClient.get(this.BaseURL+url,token && httpAuthOptions)
  }
}
