import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { AboutPageComponent } from './about-page/about-page.component'
import { ProjectsPageComponent } from './projects-page/projects-page.component'

const routes: Routes = [
  {path:'home', component: HomePageComponent},
  {path:'about', component: AboutPageComponent},
  {path:'projects', component: ProjectsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
