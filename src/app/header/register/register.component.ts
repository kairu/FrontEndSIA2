import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup = new FormGroup({});
  errorShow = false;
  errorMsg = "";
  constructor(private fr:FormBuilder, public service:ServiceService, private router: Router) { }
  ngOnInit(): void {
    this.formReg = this.fr.group({
      username: this.fr.control('',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
      email: this.fr.control('',[Validators.required,Validators.email]),
      password: this.fr.control('',[Validators.required,Validators.minLength(4),Validators.maxLength(80)]),
      confirmPassword: this.fr.control('',[Validators.required,Validators.minLength(4),Validators.maxLength(80)])
    })
  }

  registerUser(data: any){
    if(this.errorShow == false){
      this.errorShow = true;
    }
    this.service.set_isRegister(true);
    this.service.set_login(JSON.parse(JSON.stringify(data)).username);
    this.service.set_UserShow(false);
    this.formReg.reset();
    this.router.navigate(['home']);
  }

  register(){
    if(this.formReg.value.password == this.formReg.value.confirmPassword){
      this.service.postData_Register(this.formReg.value).subscribe({
        next: (e) => {this.registerUser(e)},
        error: () =>{this.errorMsg = "Username or email already exists";
                     this.errorShow = false;}
    });
    }else{
      alert("Password and Confirm Password are not same");
    }
  }
}
