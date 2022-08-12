import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-routes-demo';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if(data instanceof NavigationEnd) {
        console.log(data.url);
      }
    })
  }
}
