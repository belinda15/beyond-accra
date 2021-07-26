import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { NightLifeComponent } from './night-life/night-life.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ContactComponent } from './contact/contact.component';
import {HoverContainerComponent} from './home/hover-container.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { HeaderAltComponent } from './header-alt/header-alt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    AccomodationComponent,
    NightLifeComponent,
    BlogComponent,
    BlogDetailsComponent,
    ContactComponent,
    HoverContainerComponent,
    HeaderComponent,
    AboutComponent,
    InquiryComponent,
    HeaderAltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
