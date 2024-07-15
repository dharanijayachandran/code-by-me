import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {
  constructor(private router:Router){}
  onNavigateDashboard(){
    this.router.navigate(['dashboard']);
  }
  onNavigateService(){
    this.router.navigate(['service']);
  }
}
