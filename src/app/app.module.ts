import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsBarSuperiorComponent } from './shared/tabs-bar-superior/tabs-bar-superior.component';
import { SetTrainingComponent } from './shared/set-training/set-training.component';
import { RoundComponent } from './round/round.component';
import { DescansoComponent } from './descanso/descanso.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
