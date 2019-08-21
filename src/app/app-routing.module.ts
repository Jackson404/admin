import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsMComponent} from './contentM/news-m/news-m.component';
import {SlideMComponent} from './contentM/slide-m/slide-m.component';
import {ResumeMComponent} from './contentM/resume-m/resume-m.component';
import {PositionMComponent} from './contentM/position-m/position-m.component';
import {LabelMComponent} from './contentM/label-m/label-m.component';
import {CompanyMComponent} from './contentM/company-m/company-m.component';
import {CateMComponent} from './contentM/cate-m/cate-m.component';
import {AddNewsComponent} from './contentM/news-m/add-news/add-news.component';
import {LoginComponent} from './user/login/login.component';
import {IndexComponent} from './index/index/index.component';
import {AddSlideComponent} from './contentM/slide-m/add-slide/add-slide.component';
import {EditNewsComponent} from './contentM/news-m/edit-news/edit-news.component';
import {AddCompanyComponent} from './contentM/company-m/add-company/add-company.component';
import {PositionPageComponent} from './contentM/company-m/position-page/position-page.component';
import {AddPositionComponent} from './contentM/position-m/add-position/add-position.component';
import {AddCateComponent} from './contentM/cate-m/add-cate/add-cate.component';
import {AddLabelComponent} from './contentM/label-m/add-label/add-label.component';
import {EditSlideComponent} from './contentM/slide-m/edit-slide/edit-slide.component';
import {EditPositionComponent} from './contentM/position-m/edit-position/edit-position.component';
import {EditCompanyComponent} from './contentM/company-m/edit-company/edit-company.component';
import {EditCateComponent} from './contentM/cate-m/edit-cate/edit-cate.component';
import {EditLabelComponent} from './contentM/label-m/edit-label/edit-label.component';
import {WelcomeComponent} from './index/welcome/welcome.component';
import {ResumeComponent} from './dataM/resume/resume.component';
// import {EditResumeComponent} from './dataM/resume/edit-resume/edit-resume.component';
import {AuthGuard} from './auth/auth.guard';
import {ResumeRecordComponent} from './dataM/resume-record/resume-record.component';
import {ReviewComponent} from './enterprise/review/review.component';
import {MsgComponent} from './enterprise/msg/msg.component';

const routes: Routes = [

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'home', component: IndexComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'newsM', component: NewsMComponent},
      {path: 'newsM/add-news', component: AddNewsComponent},
      {path: 'newsM/edit-news', component: EditNewsComponent},

      {path: 'slideM', component: SlideMComponent},
      {path: 'slideM/add-slide', component: AddSlideComponent},
      {path: 'slideM/edit-slide', component: EditSlideComponent},

      {path: 'resumeM', component: ResumeMComponent},

      {path: 'positionM', component: PositionMComponent},
      {path: 'positionM/add-position', component: AddPositionComponent},
      {path: 'positionM/edit-position', component: EditPositionComponent},

      {path: 'labelM', component: LabelMComponent},
      {path: 'labelM/add-label', component: AddLabelComponent},
      {path: 'labelM/edit-label', component: EditLabelComponent},

      {path: 'companyM', component: CompanyMComponent},
      {path: 'companyM/add-company', component: AddCompanyComponent},
      {path: 'companyM/edit-company', component: EditCompanyComponent},
      {path: 'companyM/position-page', component: PositionPageComponent},

      {path: 'cateM', component: CateMComponent},
      {path: 'cateM/add-cate', component: AddCateComponent},
      {path: 'cateM/edit-cate', component: EditCateComponent},

      {path: 'dataM', component: ResumeComponent},
      // {path: 'dataM/edit-resume', component: EditResumeComponent},

      {path: 'dataRecordM', component: ResumeRecordComponent},

      {path: 'epReview', component: ReviewComponent},
      {path: 'epMsg', component: MsgComponent},

    ]
  },
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
