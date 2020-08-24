import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFormComponent } from './component/add-form/add-form.component';
import { DebounceTimeComponent } from './component/debounce-time/debounce-time.component';
import { HeaderComponent } from './component/header/header.component';


const routes: Routes = [
  { path: "", component: AddFormComponent },
  { path: "", component: DebounceTimeComponent },
  { path: "addFrom", component: AddFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
