import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

import {filter, take} from 'rxjs/operators';

@Component({
  selector: 'app-tabs-bar-superior',
  templateUrl: './tabs-bar-superior.component.html',
  styleUrls: ['./tabs-bar-superior.component.scss']
})
export class TabsBarSuperiorComponent implements OnInit {

  routeDetect: string = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((data:any) =>{
      this.routeDetect = data.url;
    })
  }

}
