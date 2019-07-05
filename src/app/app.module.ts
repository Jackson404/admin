import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { AddNewsComponent } from './contentM/news-m/add-news/add-news.component';
import { NgxNeditorModule } from '@notadd/ngx-neditor';
import { LoginComponent } from './user/login/login.component';
import { IndexComponent } from './index/index/index.component';
import { EditNewsComponent } from './contentM/news-m/edit-news/edit-news.component';
import { AddSlideComponent } from './contentM/slide-m/add-slide/add-slide.component';
import { AddCompanyComponent } from './contentM/company-m/add-company/add-company.component';
import { PositionPageComponent } from './contentM/company-m/position-page/position-page.component';
import { AddPositionComponent } from './contentM/position-m/add-position/add-position.component';
import { AddCateComponent } from './contentM/cate-m/add-cate/add-cate.component';
import { AddLabelComponent } from './contentM/label-m/add-label/add-label.component';
import { EditSlideComponent } from './contentM/slide-m/edit-slide/edit-slide.component';
import { EditPositionComponent } from './contentM/position-m/edit-position/edit-position.component';
import { EditCompanyComponent } from './contentM/company-m/edit-company/edit-company.component';
import { EditCateComponent } from './contentM/cate-m/edit-cate/edit-cate.component';
import { EditLabelComponent } from './contentM/label-m/edit-label/edit-label.component';

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
    AddNewsComponent,
    LoginComponent,
    IndexComponent,
    EditNewsComponent,
    AddSlideComponent,
    AddCompanyComponent,
    PositionPageComponent,
    AddPositionComponent,
    AddCateComponent,
    AddLabelComponent,
    EditSlideComponent,
    EditPositionComponent,
    EditCompanyComponent,
    EditCateComponent,
    EditLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxNeditorModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
