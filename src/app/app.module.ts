import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NewsMComponent } from './contentM/news-m/news-m.component';
import { SlideMComponent } from './contentM/slide-m/slide-m.component';
import { ResumeMComponent } from './contentM/resume-m/resume-m.component';
import { PositionMComponent } from './contentM/position-m/position-m.component';
import { CompanyMComponent } from './contentM/company-m/company-m.component';
import { CateMComponent } from './contentM/cate-m/cate-m.component';
import { LabelMComponent } from './contentM/label-m/label-m.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    NewsMComponent,
    SlideMComponent,
    ResumeMComponent,
    PositionMComponent,
    CompanyMComponent,
    CateMComponent,
    LabelMComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
