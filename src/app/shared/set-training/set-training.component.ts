import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { fromEvent} from 'rxjs';
import { AppService } from 'src/app/services/app.service';



@Component({
  selector: 'app-set-training',
  templateUrl: './set-training.component.html',
  styleUrls: ['./set-training.component.scss']
})
export class SetTrainingComponent implements OnInit,AfterViewInit {
  @ViewChild('cantRounds') cantRoundsELEM: ElementRef | undefined;
  @ViewChild('RoundMinutes') roundMinutes : ElementRef | undefined;
  @ViewChild('RoundSeconds') RoundSeconds: ElementRef | undefined;
  @ViewChild('DescansoMinutes') descansoMinutes: ElementRef | undefined;
  @ViewChild('DescansoSeconds') descansoSeconds: ElementRef | undefined;

  

  en_curso = false;
  
  cant_rounds = 12;
  min_rounds  = 3;
  sec_rounds = 0;
  min_descanso = 1;
  sec_descanso = 0;


  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.subjectRunning.subscribe(data =>{
      this.en_curso = data;
    });
  } 


  ngAfterViewInit(){
    fromEvent(this.cantRoundsELEM?.nativeElement,'blur').subscribe(data =>{
        if (this.cant_rounds == null || !(this.cant_rounds > 0 && this.cant_rounds <= 15)) {
          this.cant_rounds = 15;
        }
        this.appService.setCantRounds(this.cant_rounds);
    })
     


    fromEvent(this.roundMinutes?.nativeElement, 'blur').subscribe(data => {
      if (this.min_rounds == null || !(this.min_rounds >= 0 && this.min_rounds <= 1000)) {
        this.min_rounds = 0;
      }
      this.appService.setMinutesRounds(this.min_rounds);
    });



    fromEvent(this.RoundSeconds?.nativeElement, 'blur').subscribe(data => {
      if (this.sec_rounds == null || !(this.sec_rounds >= 0 && this.sec_rounds <= 59)) {
        this.sec_rounds = 0;
      }
       this.appService.setSecondsRounds(this.sec_rounds);
    })

    fromEvent(this.descansoMinutes?.nativeElement, 'blur').subscribe(data => {
      if (this.min_descanso == null || !(this.min_descanso >= 0 && this.min_descanso <= 1000)) {
        this.min_descanso = 0;
      }
      this.appService.setMinutesDescanso(this.min_descanso);
    })

    fromEvent(this.descansoSeconds?.nativeElement, 'blur').subscribe(data => {
      if (this.sec_descanso == null || !(this.sec_descanso >= 0 && this.sec_descanso <= 59)) {
        this.sec_descanso = 0;
      }
      this.appService.setSecondsDescanso(this.sec_descanso);
    });


  }

 

}
