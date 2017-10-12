import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonService, ConfigService, ApiService, DbService, WechatService } from './service';
import { MoneyPipe, ArrTruePipe } from './pipe';
import { BackDirective, BgImgDirective } from './directive';
import { TitleComponent } from './com/title/title.component';
import { TransitionComponent } from './com/transition/transition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [

    BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    BrowserAnimationsModule
  ],
  declarations: [TitleComponent, TransitionComponent, BgImgDirective,
    BackDirective, MoneyPipe, ArrTruePipe],
  exports: [BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    TitleComponent,
    TransitionComponent,
    BgImgDirective,
    BackDirective,
    MoneyPipe, ArrTruePipe

  ],
  providers: [ConfigService, ApiService, CommonService, DbService, WechatService,
    MoneyPipe, ArrTruePipe,
    BackDirective, BgImgDirective
  ]
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [
        ConfigService, ApiService, CommonService, DbService, WechatService,
        MoneyPipe, ArrTruePipe,
        BackDirective, BgImgDirective
      ],


    }
  }
}
