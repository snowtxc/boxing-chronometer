import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RoundComponent } from './round/round.component';
import { DescansoComponent } from './descanso/descanso.component';







const routes: Routes = [
  {path: '', redirectTo: 'round', pathMatch: 'full'},
  {path: 'round',component:RoundComponent},
  {path: 'descanso', component: DescansoComponent}];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
