import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CommitteeComponent } from './components/committee/committee.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } }, 
  { path: 'about-us', component: AboutUsComponent, data: { animation: 'AboutPage' } },
  { path: 'committees', component: CommitteeComponent, data: { animation: 'CommitteesPage' } },
  { path: 'forms', component: FormsComponent, data: { animation: 'FormsPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
