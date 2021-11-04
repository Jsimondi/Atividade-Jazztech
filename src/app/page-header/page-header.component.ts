import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  selectedNav = 'inicio'

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('Activated Route: ', this.activatedRoute);
  }

  switchSelectedNav(route: string) {
    switch(route) {
      case 'inicio':
        this.selectedNav = 'inicio';
        break;
      case 'woei':
        this.selectedNav = 'woei';
        break;
      case 'sobre':
        this.selectedNav = 'sobre';
        break;
    } 
  }

  navigate(route: string) {
    this.switchSelectedNav(route)
    this.router.navigate([route])
  }

}
