import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Aula01Component } from './pages/aula01/aula01.component';
import { Aula02Component } from './pages/aula02/aula02.component';

const routes: Routes = [
  { path: 'aula-01', component: Aula01Component },
  { path: 'aula-02', component: Aula02Component },
  { path: '', redirectTo: '/aula-01', pathMatch: 'full' },

];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
