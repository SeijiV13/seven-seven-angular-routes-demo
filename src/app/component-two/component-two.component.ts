import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      console.log(data);
    });
    console.log(this.route.snapshot.params);

    this.route.queryParams.subscribe((data) => {
      console.log(data);
    });
    console.log(this.route.snapshot.queryParams);

    
  }

  routePage() {
    this.router.navigate(['three'], {queryParams: {name: "seiji", country: "PH"}})
    this.router.navigate(['book', 'form'])
  }


}
