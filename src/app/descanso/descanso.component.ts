import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-descanso',
  templateUrl: './descanso.component.html',
  styleUrls: ['./descanso.component.scss']
})
export class DescansoComponent implements OnInit {


  seconds: number = 0;
  minutes: number = 0;

  contador$ = interval(1000);

  constructor(private router:Router,private appServices:AppService) { }

  ngOnInit(): void {

     //Events changes
     this.appServices.subjectMinutesDescanso.subscribe(data =>{
       this.minutes =data;
     });

    this.appServices.subjectSecondsDescanso.subscribe(data => {
      this.seconds = data;
    });

    this.startChronometer();

    
  }


  startChronometer(){
    let contadorObs = this.contador$.subscribe((n) => {
      if (this.seconds == 0) {
        if (this.seconds == 0 && this.minutes == 0) {
          contadorObs.unsubscribe();
          this.router.navigateByUrl('round');

        } else {
          this.seconds = 59;
          this.minutes = this.minutes - 1;
        }
      }
      this.seconds = this.seconds - 1;
    });
  }

}
