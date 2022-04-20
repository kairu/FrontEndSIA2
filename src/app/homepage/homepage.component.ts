import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  constructor() { }

  circles = "./assets/images/Circles.svg";
  eagle = "./assets/images/Eagle.svg";
  support247 = "./assets/images/Support247.svg";
  agileteam = "./assets/images/AgileTeam.svg";
  integratedconn = "./assets/images/IntegratedConn.svg";
  ngOnInit(): void {
  }

}
