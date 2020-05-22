import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from "./pages/pages.component";
import {NotfoundComponent} from "./notfound/notfound.component";


const routes: Routes = [{path:'', redirectTo: '/page/1', pathMatch: 'full'},
  {path:'page/:id',component:PagesComponent},
  {path:'**',component:NotfoundComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
