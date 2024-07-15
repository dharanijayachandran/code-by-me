import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private route:ActivatedRoute){}
ngOnInit(){
  this.route.params.subscribe(param=>{
    console.log("...param.."+JSON.stringify(param))
  })
  this.route.queryParams.subscribe(param=>{
    console.log("...queryParams.."+JSON.stringify(param))
  })
}
}
