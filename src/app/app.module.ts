import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LibModule } from './lib';
import { UserHomePageComponent } from './pages/user/user-home-page/user-home-page.component';
import { ShopkeeperHomePageComponent } from './pages/shopkeeper/shopkeeper-home-page/shopkeeper-home-page.component';
import { ShopkeeperPageComponent } from './pages/shopkeeper/shopkeeper-page/shopkeeper-page.component'
import { UserPageComponent } from './pages/user/user-page/user-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    UserHomePageComponent,
    ShopkeeperHomePageComponent,
    UserPageComponent,
    ShopkeeperPageComponent
  ],
  imports: [
    BrowserModule,
    LibModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginPageComponent },
      {
        path: 'user', component: UserPageComponent, children: [
          { path: '', component: UserHomePageComponent }
        ]
      },
      {
        path: 'shopkeeper', component: ShopkeeperPageComponent,
        children: [
          { path: '', component: ShopkeeperHomePageComponent }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
