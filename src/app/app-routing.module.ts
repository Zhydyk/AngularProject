import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './shared/services/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('src/app/course-page/course-page.module').then(module => module.CoursePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/login-page/login-page.module').then(module => module.LoginPageModule),

  },
  {
    path: '**',
    loadChildren: () => import('src/app/page-not-found/page-not-found.module').then(module => module.PageNotFoundModule),
  },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
