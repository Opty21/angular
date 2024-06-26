import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  { path: '' , component: HomeComponent ,pathMatch:'full'},
  { path: 'users', component: UsersComponent, children: [{ path: ':id/:name', component: UserComponent }] },
  {path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, //Guard for accessing child pages
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} }, //sending dynamic data before component renders
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] } //Guard for leaving the page
    ]
  },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} }, //sending static data
  { path: '**', redirectTo: '/not-found' } //wildcard redirect
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
