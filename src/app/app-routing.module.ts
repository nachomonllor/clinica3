import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),
    canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectLoggedInToHome } },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectUnauthorizedToLogin } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
