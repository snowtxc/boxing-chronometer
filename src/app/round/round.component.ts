import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {interval, Observer} from 'rxjs';




@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {
   

  seconds: number = 10;
  minutes : number = 1;

  contador$ = interval(1000);
  
  

  constructor(private router:Router) { }

  ngOnInit(): void {  

  }

  onClick(){
   let contadorObs = this.contador$.subscribe((n) => {

      if (this.seconds == 0) {
        if (this.seconds == 0 && this.minutes == 0) {
          contadorObs.unsubscribe();
          this.router.navigateByUrl('descanso');
          
        }else{
          this.seconds = 59;
          this.minutes = this.minutes - 1;
        }
      }
      this.seconds = this.seconds - 1;
    })
  }

}
