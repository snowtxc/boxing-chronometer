import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {interval, Observer, Subscription} from 'rxjs';




@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {
   

  seconds: number = 10;
  minutes : number = 1;

  contador$ = interval(1000);
  contadorObs: Subscription;
  
  en_curso = false;
  

  constructor(private router:Router) {
    //Inicializacion
    this.contadorObs = this.contador$.subscribe();
    this.contadorObs.unsubscribe();

   }

  ngOnInit(): void {  

  }

  onClick(){
  this.en_curso = true;
   this.contadorObs = this.contador$.subscribe((n) => {

      if (this.seconds == 0) {
        if (this.seconds == 0 && this.minutes == 0) {
          this.contadorObs.unsubscribe();
          this.router.navigateByUrl('descanso');
          
        }else{
          this.seconds = 59;
          this.minutes = this.minutes - 1;
        }
      }
      this.seconds = this.seconds - 1;
    })
  }

  onPause(){
    this.en_curso = false;
    this.contadorObs.unsubscribe();
  }


  reset(){
    this.en_curso = false;
    this.contadorObs.unsubscribe();
    this.seconds = 10;
    this.minutes = 1;
  }

}
