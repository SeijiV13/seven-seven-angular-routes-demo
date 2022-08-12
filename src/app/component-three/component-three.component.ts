import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../guards/deactivate.guard';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent implements OnInit, CanComponentDeactivate {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data);
    })
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const confirmation = window.confirm("Are you sure you want to redirect out of this page?");
    return confirmation;
  }

}
