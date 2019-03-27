import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ListItemsComponent } from './list-items/list-items.component';

const routes: Routes = [
  // Order Matters -> ** must be last
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'list', component: ListItemsComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
