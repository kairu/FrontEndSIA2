import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goDBManagement(){
    this.router.navigate(['db-management']);
  }
  goNetSecurity(){
    this.router.navigate(['net-security'])
  }
  goDataStorage(){
    this.router.navigate(['data-storage'])
  }
  goCustomerSupport(){
    this.router.navigate(['customer-support'])
  }
  goNetSetup(){
    this.router.navigate(['net-setup'])
  }
}
