import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  contRounds = 1;

  subjectRunning = new BehaviorSubject<any>(false);

  
  subjectCantRounds = new BehaviorSubject<number>(12);
  subjectMinutesRounds = new BehaviorSubject<number>(3);
  subjectSecondsRounds = new BehaviorSubject<number>(0);
  subjectMinutesDescanso = new BehaviorSubject<number>(1);
  subjectSecondsDescanso = new BehaviorSubject<number>(0);

  constructor() { }

     run(){
       this.subjectRunning.next(true);
     }

     pause(){
       this.subjectRunning.next(false);
     }



     setCantRounds(cant_rounds:number):void{
       this.subjectCantRounds.next(cant_rounds);

     }
 
    setMinutesRounds(min_rounds: number):void {
      console.log("hola!");
      this.subjectMinutesRounds.next(min_rounds);
    }

    setSecondsRounds(sec_rounds: number):void {
      this.subjectSecondsRounds.next(sec_rounds);
    } 



    setMinutesDescanso(min_descanso: number):void {
      this.subjectMinutesDescanso.next(min_descanso);
    }


    setSecondsDescanso(sec_descanso: number):void {
      this.subjectSecondsDescanso.next(sec_descanso);
    }

  



}
