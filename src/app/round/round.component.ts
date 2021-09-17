import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxHowlerService } from 'ngx-howler';



import {interval, Observer, Subscription} from 'rxjs';
import { AppService } from '../services/app.service';

declare var Howl:any;


@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {
   
  cant_rounds = 0;
  


  seconds: number = 0;
  minutes : number = 0;

  contador$ = interval(1000);
  contadorObs: Subscription;
  
  cronometroEnCurso = false;


  constructor(private router: Router, public appService: AppService, public howl: NgxHowlerService) {
    //Inicializacion
    this.contadorObs = this.contador$.subscribe();
    this.contadorObs.unsubscribe();

   }

  ngOnInit(): void {
    this.howl.register('campana_simple', {
      src: ['./assets/sonidos/campana_simple.mp3'],
      html5: true
    }).subscribe(status => {
      
    });

    this.howl.register('campana_final', {
      src: ['./assets/sonidos/campana_final.mp3'],
      html5: true
    }).subscribe(status => {

    });
     
      

    this.appService.subjectRunning.subscribe(data => { this.cronometroEnCurso = data;   })
    
    this.appService.subjectCantRounds.subscribe(data => {   this.cant_rounds = data;})

    this.appService.subjectMinutesRounds.subscribe(data =>{  this.minutes = data; })

    this.appService.subjectSecondsRounds.subscribe(data => {  this.seconds = data;  })

    if (this.cronometroEnCurso){
      this.playSoundCampanaSimple();
      this.startChronometer();
    }

    
  }

 


  startChronometer(){
    this.appService.run();
    this.contadorObs = this.contador$.subscribe((n) => {
      if (this.seconds == 0) {
        if (this.seconds == 0 && this.minutes == 0) {
          this.contadorObs.unsubscribe();

          if (this.appService.contRounds == this.cant_rounds) {  //Finish training
            this.playSoundCampanaFinal();
            this.messageFinish();
            this.reset();
            return;
         
          } else {            
            this.playSoundCampanaSimple();                              
            this.appService.contRounds++;
            this.router.navigateByUrl('descanso');
          }
        } else {
          this.seconds = 59;
          this.minutes = this.minutes - 1;
        }
      }
      this.seconds = this.seconds - 1;
    })
  }




  onPause(){
    this.contadorObs.unsubscribe();
    this.appService.pause();
  }


  reset(){
    this.contadorObs.unsubscribe();
    this.appService.pause();
    this.appService.contRounds = 1;
    this.seconds = this.appService.subjectSecondsRounds.getValue();
    this.minutes = this.appService.subjectMinutesRounds.getValue();
  }

  messageFinish(){
    alert("Entrenamiento finalizado!");
  } 


  playSoundCampanaSimple(){
    this.howl.get('campana_simple').play();
  }

  playSoundCampanaFinal(){
    this.howl.get('campana_final').play();
  }


}
