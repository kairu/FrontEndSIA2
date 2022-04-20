import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  fLogin: FormGroup = new FormGroup({});
  constructor(public service:ServiceService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.fLogin = this.fb.group({
      username: this.fb.control('',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
      password: this.fb.control('',[Validators.required,Validators.minLength(4),Validators.maxLength(80)])
    })
  }

  getUser(data: any){
    this.service.set_UserShow(!this.service.get_UserShow());
    if(this.service.get_isRegister() == false){
      this.service.set_isRegister(true)
    }
    this.service.set_login(JSON.parse(JSON.stringify(data)).username);
    this.service.set_UserShow(false);
    this.fLogin.reset();
  }

  login(){
    this.service.getData_login (this.fLogin.value).subscribe({
    next: (d) => {this.getUser(d)},
    error: () => {alert("Username or Password is incorrect");}
    });
  }

  showRegister(){
    this.service.set_isRegister(false);
  }
  logout(){
    this.service.set_UserShow(!this.service.get_UserShow());
  }

  
}
