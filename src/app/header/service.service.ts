import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userShow: boolean = true;
  isRegister: boolean = true;
  login: any;
  constructor(
    private http:HttpClient
  ) {}

  svr_add = 'http://localhost:5000';

  postData_Register(data: any){
    return this.http.post(
      this.svr_add+'/register/',
      JSON.stringify(data));
  }

  getData_login(data: any){
    return this.http.post(
      this.svr_add+'/login/',
      JSON.stringify(data));
  }

  getData_logout(){
    return this.http.get(
      this.svr_add+'/logout/');
  }

  get_UserShow(){
    return this.userShow;
  }
  set_UserShow(data: boolean){
    this.userShow = data;
  }
  get_isRegister(){
    return this.isRegister;
  }
  set_isRegister(data: boolean){
    this.isRegister = data;
  }
  get_login(){
    return this.login;
  }
  set_login(data: any){
    this.login = data;
  }
}
