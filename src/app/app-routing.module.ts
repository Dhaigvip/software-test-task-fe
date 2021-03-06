import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddformComponent } from './addform/addform.component';
import { EditformComponent } from './editform/editform.component';
import { AllclientsComponent } from './allclients/allclients.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'addform', component: AddformComponent},
  { path: 'editform', component: EditformComponent},
  { path: 'allclients', component: AllclientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
