import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsMComponent} from "./contentM/news-m/news-m.component";
import {SlideMComponent} from "./contentM/slide-m/slide-m.component";
import {ResumeMComponent} from "./contentM/resume-m/resume-m.component";
import {PositionMComponent} from "./contentM/position-m/position-m.component";
import {LabelMComponent} from "./contentM/label-m/label-m.component";
import {CompanyMComponent} from "./contentM/company-m/company-m.component";
import {CateMComponent} from "./contentM/cate-m/cate-m.component";
import {AddNewsComponent} from "./contentM/news-m/add-news/add-news.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {path: 'newsM', component: NewsMComponent},
  {path: 'slideM', component: SlideMComponent},
  {path: 'resumeM', component: ResumeMComponent},
  {path: 'positionM', component: PositionMComponent},
  {path: 'labelM', component: LabelMComponent},
  {path: 'companyM', component: CompanyMComponent},
  {path: 'cateM', component: CateMComponent},
  {path: 'add-news', component: AddNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
