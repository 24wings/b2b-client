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
import { UserSignupPageComponent } from './pages/user-signup-page/user-signup-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { ShopkeeperSingupPageComponent } from './pages/shopkeeper-singup-page/shopkeeper-singup-page.component';
import { AddressSelectComponent } from './com/address-select/address-select.component';
import { ShopkeeperSettingPageComponent } from './pages/shopkeeper/shopkeeper-setting-page/shopkeeper-setting-page.component';
import { SendProductAddressPageComponent } from './pages/shopkeeper/send-product-address-page/send-product-address-page.component';
import { ReturnProductAddressPageComponent } from './pages/shopkeeper/return-product-address-page/return-product-address-page.component';
import { PublishProductPageComponent } from './pages/shopkeeper/publish-product-page/publish-product-page.component';
import { ProductTagComponent } from './com/product-tag/product-tag.component';
import { ProductTagPageComponent } from './pages/admin/product-tag-page/product-tag-page.component';
import { AdminLoginPageComponent } from './pages/admin/admin-login-page/admin-login-page.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { ShopkeeperTransferSettingPageComponent } from './pages/shopkeeper/shopkeeper-transfer-setting-page/shopkeeper-transfer-setting-page.component';
import { AdminTransferSettingPageComponent } from './pages/admin/admin-transfer-setting-page/admin-transfer-setting-page.component';
import { ProductManagePageComponent } from './pages/shopkeeper/product-manage-page/product-manage-page.component';
import { CompanyAuthPageComponent } from './pages/shopkeeper/company-auth-page/company-auth-page.component';
import { PublishCasePageComponent } from './pages/shopkeeper/publish-case-page/publish-case-page.component';
import { BottomBarComponent } from './com/bottom-bar/bottom-bar.component';
import { UserSettingPageComponent } from './pages/user/user-setting-page/user-setting-page.component';
import { UserPersonSettingPageComponent } from './pages/user/user-person-setting-page/user-person-setting-page.component';
import { ModifyPasswordPageComponent } from './pages/user/modify-password-page/modify-password-page.component';
import { UserReciveAddressPageComponent } from './pages/user/user-recive-address-page/user-recive-address-page.component';
import { UserPublishTaskPageComponent } from './pages/user/user-publish-task-page/user-publish-task-page.component';
import { AdminBigMarketPageComponent } from './pages/admin/admin-big-market-page/admin-big-market-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    UserHomePageComponent,
    ShopkeeperHomePageComponent,
    UserPageComponent,
    ShopkeeperPageComponent,
    UserSignupPageComponent,
    ForgotPasswordPageComponent,
    ShopkeeperSingupPageComponent,
    AddressSelectComponent,
    ShopkeeperSettingPageComponent,
    SendProductAddressPageComponent,
    ReturnProductAddressPageComponent,
    PublishProductPageComponent,
    ProductTagComponent,
    ProductTagPageComponent,
    AdminLoginPageComponent,
    AdminPageComponent,
    ShopkeeperTransferSettingPageComponent,
    AdminTransferSettingPageComponent,
    ProductManagePageComponent,
    CompanyAuthPageComponent,
    PublishCasePageComponent,
    BottomBarComponent,
    UserSettingPageComponent,
    UserPersonSettingPageComponent,
    ModifyPasswordPageComponent,
    UserReciveAddressPageComponent,
    UserPublishTaskPageComponent,
    AdminBigMarketPageComponent,


  ],
  imports: [
    BrowserModule,
    LibModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'user-signup', component: UserSignupPageComponent },
      { path: 'forgot-password', component: ForgotPasswordPageComponent },
      { path: 'shopkeeper-signup', component: ShopkeeperSingupPageComponent },
      {
        path: 'user', component: UserPageComponent, children: [
          { path: '', component: UserHomePageComponent },
          { path: 'setting', component: UserSettingPageComponent },
          { path: 'person-setting', component: UserPersonSettingPageComponent },
          { path: 'modify-password', component: ModifyPasswordPageComponent },
          { path: 'recive-address', component: UserReciveAddressPageComponent },
          { path: 'publish-task', component: UserPublishTaskPageComponent }

        ]
      },
      {
        path: 'shopkeeper', component: ShopkeeperPageComponent,
        children: [
          { path: '', component: ShopkeeperHomePageComponent },
          { path: 'setting', component: ShopkeeperSettingPageComponent },
          { path: 'send-product-address', component: SendProductAddressPageComponent },
          { path: 'return-product-address', component: ReturnProductAddressPageComponent },
          { path: 'publish-product', component: PublishProductPageComponent },
          { path: 'transfer-setting', component: ShopkeeperTransferSettingPageComponent },
          { path: 'product-manage', component: ProductManagePageComponent },
          { path: 'company-auth', component: CompanyAuthPageComponent },
          { path: 'publish-case', component: PublishCasePageComponent }
        ]
      },
      { path: 'admin/login', component: AdminLoginPageComponent },

      {
        path: 'admin', component: AdminPageComponent, children: [
          { path: '', component: ProductTagPageComponent },
          { path: 'transfer-setting', component: AdminTransferSettingPageComponent },
          { path: 'big-market', component: AdminBigMarketPageComponent }
        ]
      }

    ])
  ],
  providers: [],

  bootstrap: [AppComponent],

})
export class AppModule { }
