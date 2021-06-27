import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AccomodationComponent} from './accomodation/accomodation.component';
import {NightLifeComponent} from './night-life/night-life.component';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'accommodation' , component: AccomodationComponent},
  {path: 'night-life' , component: NightLifeComponent},
  {path: 'blog' , component: BlogComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'blog-details/:id' , component: BlogDetailsComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
