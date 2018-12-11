import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent} from './components/maps/maps.component';
import { LoginComponent} from './components/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent},

  { path: 'home', component: MapsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
