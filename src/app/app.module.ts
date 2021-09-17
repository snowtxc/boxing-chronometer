import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsBarSuperiorComponent } from './shared/tabs-bar-superior/tabs-bar-superior.component';
import { SetTrainingComponent } from './shared/set-training/set-training.component';
import { RoundComponent } from './round/round.component';
import { DescansoComponent } from './descanso/descanso.component';
import { NgxHowlerService } from 'ngx-howler';




@NgModule({
  declarations: [
    AppComponent,
    TabsBarSuperiorComponent,
    SetTrainingComponent,
    RoundComponent,
    DescansoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NgxHowlerService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngxHowlerService: NgxHowlerService) {
    ngxHowlerService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.0/howler.min.js');

  }
    
  }
 
