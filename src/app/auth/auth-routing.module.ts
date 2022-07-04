import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from 'app/layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from 'app/layouts/admin-layout/admin-layout.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  // {
  //   path:'adminLayout',
  //   loadChildren:()=>AdminLayoutModule
  // },
{
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
