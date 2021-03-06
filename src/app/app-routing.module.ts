import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import {HomeComponent} from './components/home/home.component'
import {MyListComponent} from './components/my-list/my-list.component'
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'mylist',component:MyListComponent},
  {path:'mylist',component:MyListComponent},
  {path:'watch/:type/:id',component:DetailComponent},
  {path:'**',redirectTo:'' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
