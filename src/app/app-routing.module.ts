import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './Components/archive/archive.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { TrashComponent } from './Components/trash/trash.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'resetpassword/:token',component:ResetpasswordComponent},
  {
    path: 'home', component: DashboardComponent,
    children: [
      { path: 'getallnotes', component: GetallnotesComponent },
      { path: 'createnote', component: CreatenoteComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'trash', component: TrashComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
