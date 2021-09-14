import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {take} from 'rxjs/operators';

@Component({
  selector: 'app-tabs-bar-superior',
  templateUrl: './tabs-bar-superior.component.html',
  styleUrls: ['./tabs-bar-superior.component.scss']
})
export class TabsBarSuperiorComponent implements OnInit {

  route: string = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.pipe(take(1)).subscribe((data:any) =>{
      this.route = data.url;
    })
  }

}
