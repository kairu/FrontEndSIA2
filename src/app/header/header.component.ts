import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  
})
export class HeaderComponent implements OnInit {
  constructor(public service: ServiceService) { }
  isRegister: boolean = this.service.get_isRegister();
  ngOnInit() {
  }
}
